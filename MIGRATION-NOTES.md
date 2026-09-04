# Quartz 4.5.2 → 5.0.0 migration: first pass

Branch `v5` (worktree at `../second-brain-v5`), based on `upstream/v5` @ `075afd3f`.
Nothing here is committed yet. Deploy target is Cloudflare Pages.

## Status

A full build of the real 640-file vault succeeds and every v4 customization was
verified present in the output:

| v4 customization | v5 port | verified |
| --- | --- | --- |
| `Plugin.RemoveTags({ignore: [paper, book, dl2]})` | `./plugins/remove-tags` | no paper/book/dl2 tag page emitted; 91 tag pages, same as v4 |
| `Plugin.AuthorLinks()` | `./plugins/author-links` | author pages get backlinks from literature notes |
| `Component.AuthorInfo()` | `./plugins/author-info` | renders with resolved internal author links |
| `Component.Image("static/icon.png", …)` | `./plugins/sidebar-image` | renders on every page |
| `Component.RecentNotes({limit, filter})` | `./plugins/home-recent-notes` | 20 items, 0 outside the two allowed roots |
| `ConditionalRender(slug === "index")` | `registerCondition("index-only")` in `quartz.ts` | recent-notes appears on `index.html` only |
| `quartz/styles/themes/_index.scss` | copied verbatim, `@use`d from `custom.scss` | — |

Output parity vs. the v4 build of the same content: 705 HTML pages, 91 tag
pages, 10 RSS items — identical on both.

## The one thing that must change before deploying

**Cloudflare Pages build command.** v5 requires plugins to be installed before
the build runs, so the command must become:

```shell
npx quartz plugin install && npx quartz build
```

A plain `npx quartz build` will fail. Output directory stays `public`.

Two things that are already handled and need no dashboard change:

- **Node version.** v5 requires Node ≥ 22 and ships `.node-version` (`v22.16.0`),
  which Cloudflare Pages honours. The v4 branch had no such file.
- **Plugin `dist/`.** All five local plugins are pre-built and their `dist/`
  directories are committed (`.gitignore` does not exclude them). `plugin install`
  then reports `using pre-built dist/` and does no work at deploy time. If you
  edit a plugin's `src/`, run `node build.mjs` in that plugin's directory and
  commit the result, or the deployed site keeps the old behaviour.

Optional: cache `.quartz/plugins` keyed on `quartz.lock.json` to shave install
time. Not required.

## Two behaviour changes to be aware of

### URLs are all lowercased

`/100-Reference-notes/101-Literature/Foo` becomes
`/100-reference-notes/101-literature/foo`. Internal links regenerate fine; only
external deep links to individual notes break. You've said you don't care about
those, so nothing to do — but note that `alias-redirects` will emit ~607
redirect stubs on Cloudflare anyway, since it only skips them on
case-insensitive filesystems (i.e. a local macOS build produces zero, a Linux
build produces all of them). Harmless either way. Set `enableCaseRedirects: false`
on the `alias-redirects` entry if you'd rather not ship them.

### Tag and folder pages now enter the content index

v5 `contentIndex.json` has 704 entries vs. v4's 608 — the extra 96 are the 91
tag pages and 5 folder pages. They therefore appear in `sitemap.xml` and in
search results, which they did not in v4. `content-index` exposes no option to
exclude them.

## `quartz.ts` option overrides do not reach community plugins in 5.0.0

The generated `.quartz/plugins/index.ts` registers overrides under a
`__`-mangled key (`quartz-community__recent-notes`) while `buildLayoutForEntries`
looks them up via `extractPluginName()`, which returns the raw source string
(`@quartz-community/recent-notes`). The keys never match, so the override is
dropped without an error. Switching the source to `github:` form makes the keys
agree but then the barrel exports the real factory as a *passthrough*, so
calling it just constructs a component that is thrown away.

This matters because `filter` and `sort` are JS callbacks with no YAML
equivalent. Verified by narrowing the filter to zettelkasten-only and observing
zero change in the output.

Workaround used here: `./plugins/home-recent-notes` wraps
`@quartz-community/recent-notes` with the filter baked in, and the upstream
plugin is left installed but `enabled: false`. The same trick would be needed
for any other callback option (e.g. Explorer's `sortFn`/`filterFn`).

## Local plugin gotchas

- **Type-only imports must use `import type`.** Local plugins are loaded by
  plain Node, which strips `.ts` types natively but requires erasable syntax.
  A value import of `QuartzTransformerPlugin` or `FullSlug` fails at runtime
  with "does not provide an export named …", and the loader swallows it — the
  build reports success with the plugin silently missing.
- **`.tsx` cannot be loaded directly.** Node has no JSX transform, and
  `tsconfig.json` excludes `.quartz/**/src/**` so the project's
  `jsxImportSource: preact` never applies. This is why everything ships a built
  `dist/`.
- Plugin failures are reported as one-line warnings in a build that still exits
  0. Worth grepping the build log for `⚠`/`✗` after any change.

## Reproducing the build locally

`content/` on this branch is empty; the verification build pointed it at the
real vault.

```shell
ln -s ../second-brain/content content   # or run ./publish as usual
npm i
npx quartz plugin install && npx quartz build
```

`./publish` needs no changes — it only syncs the vault into `content/`.

The `Makefile` (rsync to `rpi`) is dead and should be deleted on this branch.

## Unrelated content bug found and fixed

`content/100 Reference notes/101 Literature/NitroGen - An Open Foundation Model
for Generalist Gaming Agents.md` had `- "[[Linxi "Jim" Fan]]"` in its frontmatter
— unescaped inner double quotes, which is invalid YAML. This aborts the build on
**v4 as well as v5**; the note arrived in a vault sync during this session, so
`main` currently does not build and the last Cloudflare deploy would have failed.
Fixed on `main` by switching to single quotes, but the same fix is needed in the
Obsidian vault or the next `./publish` will reintroduce it.

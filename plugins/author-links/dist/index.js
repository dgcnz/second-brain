// src/index.ts
import {
  simplifySlug,
  splitAnchor,
  stripSlashes,
  transformLink
} from "@quartz-community/utils/path";
var defaultOptions = {
  markdownLinkResolution: "shortest"
};
var authorWikilinkRegex = /^\[\[([^\[\]\|\#\\]+)?(#+[^\[\]\|\#\\]+)?(\\?\|[^\[\]\#]*)?\]\]$/;
var AuthorLinks = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  return {
    name: "AuthorLinks",
    htmlPlugins(ctx) {
      return [
        () => {
          return (_tree, file) => {
            const authors = file.data.frontmatter?.authors;
            const srcSlug = file.data.slug;
            if (!authors || !srcSlug) return;
            const outgoing = new Set(file.data.links ?? []);
            const curSimpleSlug = simplifySlug(srcSlug);
            const transformOptions = {
              strategy: opts.markdownLinkResolution,
              allSlugs: ctx.allSlugs
            };
            const addLink = (target) => {
              const href = transformLink(srcSlug, target, transformOptions);
              const url = new URL(href, "https://base.com/" + stripSlashes(curSimpleSlug, true));
              let [destCanonical] = splitAnchor(url.pathname);
              if (destCanonical.endsWith("/")) {
                destCanonical += "index";
              }
              const full = decodeURIComponent(stripSlashes(destCanonical, true));
              outgoing.add(simplifySlug(full));
            };
            const parseAuthor = (raw) => {
              if (typeof raw !== "string") return;
              const trimmed = raw.trim();
              if (!trimmed) return;
              const match = trimmed.match(authorWikilinkRegex);
              if (!match) return;
              const [, rawFp, rawHeader] = match;
              const fp = (rawFp ?? "").trim();
              const anchor = (rawHeader ?? "").trim();
              if (!fp) return;
              addLink(`${fp}${anchor}`);
            };
            if (Array.isArray(authors)) {
              authors.forEach(parseAuthor);
            } else {
              parseAuthor(authors);
            }
            file.data.links = [...outgoing];
          };
        }
      ];
    }
  };
};
var index_default = AuthorLinks;
export {
  AuthorLinks,
  index_default as default
};

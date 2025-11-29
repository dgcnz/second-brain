import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { TransformOptions, transformLink } from "../util/path"
import style from "./styles/contentMeta.scss"

export default (() => {
  function AuthorInfo({ fileData, displayClass, ctx }: QuartzComponentProps) {
    const fm = fileData.frontmatter ?? {}
    const authorsRaw = fm.authors
    const urlRaw = fm.url

    type AuthorEntry = { label: string; href?: string; isAlias?: boolean }

    const linkOptions: TransformOptions = {
      strategy: "shortest",
      allSlugs: ctx.allSlugs,
    }

    const wikilinkPattern = /^\[\[([^\[\]\|\#\\]+)?(#+[^\[\]\|\#\\]+)?(\\?\|[^\[\]\#]*)?\]\]$/

    const parseAuthor = (rawVal: unknown): AuthorEntry | null => {
      if (typeof rawVal !== "string") return null
      const trimmed = rawVal.trim()
      if (!trimmed) return null

      const wikiMatch = trimmed.match(wikilinkPattern)
      if (wikiMatch) {
        const [, rawFp, rawHeader, rawAlias] = wikiMatch
        const fp = (rawFp ?? "").trim()
        const anchor = (rawHeader ?? "").trim()
        const alias = rawAlias?.replace(/^\\?\|/, "").trim()
        const target = `${fp}${anchor}`
        if (target.length === 0 || !fileData.slug) return null

        const href = transformLink(fileData.slug, target, linkOptions)
        return { label: alias && alias.length > 0 ? alias : fp, href, isAlias: Boolean(alias) }
      }

      const label = trimmed.replace(/^\[\[/, "").replace(/\]\]$/, "").trim()
      return label.length > 0 ? { label } : null
    }

    const authorEntries: AuthorEntry[] = []

    if (Array.isArray(authorsRaw)) {
      for (const raw of authorsRaw) {
        const parsed = parseAuthor(raw)
        if (parsed) {
          authorEntries.push(parsed)
        }
      }
    } else if (typeof authorsRaw === "string" && authorsRaw.trim().length > 0) {
      const parsed = parseAuthor(authorsRaw)
      if (parsed) {
        authorEntries.push(parsed)
      }
    }

    const url = typeof urlRaw === "string" && urlRaw.trim().length > 0 ? urlRaw.trim() : null

    if (authorEntries.length === 0 && !url) {
      return null
    }

    return (
      <p class={classNames(displayClass, "content-meta", "author-info")}>
        {authorEntries.length > 0 ? (
          <span>
            {authorEntries.map((author, idx) => (
              <span key={`author-${idx}`}>
                {idx > 0 ? ", " : null}
                {author.href ? (
                  <a
                    href={author.href}
                    class={classNames("internal", author.isAlias ? "alias" : undefined)}
                  >
                    {author.label}
                  </a>
                ) : (
                  author.label
                )}
              </span>
            ))}
            {url ? <br /> : null}
          </span>
        ) : null}
        {url ? (
          <a href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
        ) : null}
      </p>
    )
  }

  AuthorInfo.css = style
  return AuthorInfo
}) satisfies QuartzComponentConstructor

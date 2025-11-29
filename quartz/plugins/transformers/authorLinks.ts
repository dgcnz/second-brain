import { QuartzTransformerPlugin } from "../types"
import {
  FullSlug,
  SimpleSlug,
  TransformOptions,
  simplifySlug,
  splitAnchor,
  stripSlashes,
  transformLink,
} from "../../util/path"

interface Options {
  markdownLinkResolution: TransformOptions["strategy"]
}

const defaultOptions: Options = {
  markdownLinkResolution: "shortest",
}

const authorWikilinkRegex = /^\[\[([^\[\]\|\#\\]+)?(#+[^\[\]\|\#\\]+)?(\\?\|[^\[\]\#]*)?\]\]$/

export const AuthorLinks: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "AuthorLinks",
    htmlPlugins(ctx) {
      return [
        () => {
          return (_tree, file) => {
            const authors = file.data.frontmatter?.authors
            const srcSlug = file.data.slug as FullSlug | undefined
            if (!authors || !srcSlug) return

            const outgoing = new Set<SimpleSlug>(file.data.links ?? [])
            const curSimpleSlug = simplifySlug(srcSlug)

            const transformOptions: TransformOptions = {
              strategy: opts.markdownLinkResolution,
              allSlugs: ctx.allSlugs,
            }

            const addLink = (target: string) => {
              const href = transformLink(srcSlug, target, transformOptions)

              // Normalize to a canonical slug, mirroring CrawlLinks logic
              const url = new URL(href, "https://base.com/" + stripSlashes(curSimpleSlug, true))
              let [destCanonical] = splitAnchor(url.pathname)
              if (destCanonical.endsWith("/")) {
                destCanonical += "index"
              }
              const full = decodeURIComponent(stripSlashes(destCanonical, true)) as FullSlug
              outgoing.add(simplifySlug(full))
            }

            const parseAuthor = (raw: unknown) => {
              if (typeof raw !== "string") return
              const trimmed = raw.trim()
              if (!trimmed) return

              const match = trimmed.match(authorWikilinkRegex)
              if (!match) return

              const [, rawFp, rawHeader] = match
              const fp = (rawFp ?? "").trim()
              const anchor = (rawHeader ?? "").trim()
              if (!fp) return

              addLink(`${fp}${anchor}`)
            }

            if (Array.isArray(authors)) {
              authors.forEach(parseAuthor)
            } else {
              parseAuthor(authors)
            }

            file.data.links = [...outgoing]
          }
        },
      ]
    },
  }
}

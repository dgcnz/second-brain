import { QuartzTransformerPlugin } from "../types"

interface Options {
  /** Tags to remove (case-insensitive, expects slugged tags like "paper") */
  ignore: string[]
}

const defaultOptions: Options = {
  ignore: [],
}

export const RemoveTags: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  const ignoreSet = new Set((opts.ignore ?? []).map((t) => t.toLowerCase()))

  return {
    name: "RemoveTags",
    htmlPlugins() {
      return [
        () => {
          return (_tree, file) => {
            const tags = file.data.frontmatter?.tags
            if (!Array.isArray(tags) || ignoreSet.size === 0) return

            file.data.frontmatter!.tags = tags.filter(
              (tag) => !ignoreSet.has(String(tag).toLowerCase()),
            )
          }
        },
      ]
    },
  }
}

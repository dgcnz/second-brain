import { RecentNotes } from "@quartz-community/recent-notes"
import type { QuartzComponent } from "@quartz-community/types"

// Quartz 5.0.0 drops `quartz.ts` option overrides for community plugins (the
// override key and the lookup key disagree), so the v4 `filter` callback is
// baked in here instead of passed through quartz.config.yaml.
const ROOTS = ["000-zettelkasten/", "100-reference-notes/101-literature/"]

export const HomeRecentNotes: () => QuartzComponent = () =>
  RecentNotes({
    limit: 20,
    filter: (f: { slug?: string }) => {
      const slug = (f.slug ?? "").toLowerCase()
      return ROOTS.some((root) => slug.startsWith(root))
    },
  })

export default HomeRecentNotes

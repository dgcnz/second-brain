import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"

// v4 equivalent: Component.ConditionalRender({ condition: (page) => page.fileData.slug === "index" })
// The builtin set only ships "not-index", so register the inverse.
registerCondition("index-only", (props) => props.fileData.slug === "index")

// NOTE: the v4 `RecentNotes({ filter })` callback is NOT set here.
// Quartz 5.0.0 silently drops quartz.ts option overrides for community plugins
// (the barrel registers under "quartz-community__recent-notes" while the layout
// builder looks up "@quartz-community/recent-notes"), so the filter lives in
// ./plugins/home-recent-notes instead.

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

// src/components.ts
import { RecentNotes } from "@quartz-community/recent-notes";
var ROOTS = ["000-zettelkasten/", "100-reference-notes/101-literature/"];
var HomeRecentNotes = () => RecentNotes({
  limit: 20,
  filter: (f) => {
    const slug = (f.slug ?? "").toLowerCase();
    return ROOTS.some((root) => slug.startsWith(root));
  }
});
var components_default = HomeRecentNotes;
export {
  HomeRecentNotes,
  components_default as default
};

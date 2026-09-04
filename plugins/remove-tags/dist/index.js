// src/index.ts
var defaultOptions = {
  ignore: []
};
var RemoveTags = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const ignoreSet = new Set((opts.ignore ?? []).map((t) => t.toLowerCase()));
  return {
    name: "RemoveTags",
    htmlPlugins() {
      return [
        () => {
          return (_tree, file) => {
            const tags = file.data.frontmatter?.tags;
            if (!Array.isArray(tags) || ignoreSet.size === 0) return;
            file.data.frontmatter.tags = tags.filter(
              (tag) => !ignoreSet.has(String(tag).toLowerCase())
            );
          };
        }
      ];
    }
  };
};
var index_default = RemoveTags;
export {
  RemoveTags,
  index_default as default
};

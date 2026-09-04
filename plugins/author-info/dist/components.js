// src/components.tsx
import { classNames } from "@quartz-community/utils/lang";
import { transformLink } from "@quartz-community/utils/path";
import { jsx, jsxs } from "preact/jsx-runtime";
var wikilinkPattern = /^\[\[([^\[\]\|\#\\]+)?(#+[^\[\]\|\#\\]+)?(\\?\|[^\[\]\#]*)?\]\]$/;
var AuthorInfo = () => {
  const Component = ({ fileData, displayClass, ctx }) => {
    const fm = fileData.frontmatter ?? {};
    const authorsRaw = fm.authors;
    const urlRaw = fm.url;
    const linkOptions = {
      strategy: "shortest",
      allSlugs: ctx.allSlugs
    };
    const parseAuthor = (rawVal) => {
      if (typeof rawVal !== "string") return null;
      const trimmed = rawVal.trim();
      if (!trimmed) return null;
      const wikiMatch = trimmed.match(wikilinkPattern);
      if (wikiMatch) {
        const [, rawFp, rawHeader, rawAlias] = wikiMatch;
        const fp = (rawFp ?? "").trim();
        const anchor = (rawHeader ?? "").trim();
        const alias = rawAlias?.replace(/^\\?\|/, "").trim();
        const target = `${fp}${anchor}`;
        if (target.length === 0 || !fileData.slug) return null;
        const href = transformLink(fileData.slug, target, linkOptions);
        return { label: alias && alias.length > 0 ? alias : fp, href, isAlias: Boolean(alias) };
      }
      const label = trimmed.replace(/^\[\[/, "").replace(/\]\]$/, "").trim();
      return label.length > 0 ? { label } : null;
    };
    const authorEntries = [];
    if (Array.isArray(authorsRaw)) {
      for (const raw of authorsRaw) {
        const parsed = parseAuthor(raw);
        if (parsed) {
          authorEntries.push(parsed);
        }
      }
    } else if (typeof authorsRaw === "string" && authorsRaw.trim().length > 0) {
      const parsed = parseAuthor(authorsRaw);
      if (parsed) {
        authorEntries.push(parsed);
      }
    }
    const url = typeof urlRaw === "string" && urlRaw.trim().length > 0 ? urlRaw.trim() : null;
    if (authorEntries.length === 0 && !url) {
      return null;
    }
    return /* @__PURE__ */ jsxs("p", { class: classNames(displayClass, "content-meta", "author-info"), children: [
      authorEntries.length > 0 ? /* @__PURE__ */ jsxs("span", { children: [
        authorEntries.map((author, idx) => /* @__PURE__ */ jsxs("span", { children: [
          idx > 0 ? ", " : null,
          author.href ? /* @__PURE__ */ jsx(
            "a",
            {
              href: author.href,
              class: classNames("internal", author.isAlias ? "alias" : void 0),
              children: author.label
            }
          ) : author.label
        ] }, `author-${idx}`)),
        url ? /* @__PURE__ */ jsx("br", {}) : null
      ] }) : null,
      url ? /* @__PURE__ */ jsx("a", { href: url, rel: "noopener noreferrer", target: "_blank", children: url }) : null
    ] });
  };
  Component.css = `
    .content-meta.author-info {
      margin-top: 0.35rem;
      margin-bottom: 0.35rem;
    }
  `;
  return Component;
};
var components_default = AuthorInfo;
export {
  AuthorInfo,
  components_default as default
};

// src/components.tsx
import { resolveRelative } from "@quartz-community/utils/path";
import { classNames } from "@quartz-community/utils/lang";
import { jsx } from "preact/jsx-runtime";
var defaultOptions = {
  src: "static/icon.png",
  alt: "Icon",
  class: "sidebar-icon",
  width: 224,
  height: 224
};
var SidebarImage = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts };
  const Component = ({ fileData, displayClass }) => {
    const href = resolveRelative(fileData.slug, opts.src);
    return /* @__PURE__ */ jsx(
      "img",
      {
        src: href,
        alt: opts.alt ?? "",
        class: classNames(displayClass, opts.class),
        width: opts.width,
        height: opts.height,
        loading: "lazy"
      }
    );
  };
  Component.css = `
    .sidebar > .sidebar-icon {
      display: block;
      margin: 0 auto;
    }
  `;
  return Component;
};
export {
  SidebarImage
};

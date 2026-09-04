/** @jsxImportSource preact */
import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"
import type { FullSlug } from "@quartz-community/utils/path"
import { resolveRelative } from "@quartz-community/utils/path"
import { classNames } from "@quartz-community/utils/lang"

interface Options {
  src: string
  alt?: string
  class?: string
  width?: string | number
  height?: string | number
}

const defaultOptions: Options = {
  src: "static/icon.png",
  alt: "Icon",
  class: "sidebar-icon",
  width: 224,
  height: 224,
}

export const SidebarImage: QuartzComponentConstructor<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const href = resolveRelative(fileData.slug!, opts.src as FullSlug)

    return (
      <img
        src={href}
        alt={opts.alt ?? ""}
        class={classNames(displayClass, opts.class)}
        width={opts.width}
        height={opts.height}
        loading="lazy"
      />
    )
  }

  Component.css = `
    .sidebar > .sidebar-icon {
      display: block;
      margin: 0 auto;
    }
  `

  return Component
}

export default SidebarImage

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"

interface ImageOptions {
  alt?: string
  class?: string
  width?: string | number
  height?: string | number
}

export default ((src: string, opts?: ImageOptions) => {
  const Image: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const href = resolveRelative(fileData.slug!, src as FullSlug)
    const alt = opts?.alt ?? ""
    const width = opts?.width
    const height = opts?.height

    return (
      <img
        src={href}
        alt={alt}
        class={classNames(displayClass, opts?.class)}
        width={width}
        height={height}
        loading="lazy"
      />
    )
  }

  return Image
}) satisfies QuartzComponentConstructor<[string, ImageOptions?]>

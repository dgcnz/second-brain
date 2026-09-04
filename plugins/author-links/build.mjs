import * as esbuild from "esbuild"

const SINGLETON_EXTERNALS = [
  "preact",
  "preact/hooks",
  "preact/jsx-runtime",
  "preact/compat",
  "@quartz-community/types",
  "@quartz-community/utils",
  "@quartz-community/utils/*",
  "vfile",
  "vfile/*",
  "unified",
]

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node22",
  jsx: "automatic",
  jsxImportSource: "preact",
  external: SINGLETON_EXTERNALS,
  outExtension: { ".js": ".js" },
})
console.log("built")

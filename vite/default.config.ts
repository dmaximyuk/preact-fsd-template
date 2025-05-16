import type { InlineConfig } from "vite";

import core from "@preact/preset-vite";
import svgr from "vite-plugin-svgr";
import tsPaths from "vite-tsconfig-paths";
import { analyzer } from "vite-bundle-analyzer";
import { compression } from "vite-plugin-compression2";
import { fileURLToPath } from "node:url";

import type { VITE_EXPORT_PARAMS } from "./types.config";

export default (params: VITE_EXPORT_PARAMS): InlineConfig => ({
  appType: "spa",
  publicDir: "public",
  plugins: [
    params?.mode === "productiongzip" &&
      compression({
        algorithm: "gzip",
        deleteOriginalAssets: true,
        include: /\.(xml|css|json|js|mjs|svg|yaml|yml|toml)$/,
      }),
    tsPaths(),
    core(),
    svgr(),
    params?.mode === "productionanalyse" && analyzer(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("../src/styles", import.meta.url)),
    },
  },
});

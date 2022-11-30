import { sveltekit } from "@sveltejs/kit/vite";
import { fileURLToPath } from "url";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [sveltekit()],
  // @でsrcを参照できるようにしている. tsconfigでもpathを設定する
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
};

export default config;

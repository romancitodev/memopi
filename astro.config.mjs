// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDeploy = process.env.GH_DEPLOY;

export default defineConfig({
  site: isDeploy ? "https://romancitodev.github.io" : undefined,
  base: isDeploy ? "/memopi" : "/",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~/*": path.resolve(__dirname, "./src/*"),
      },
    },
  },
});

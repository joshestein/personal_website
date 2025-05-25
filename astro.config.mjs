// @ts-check
import mdx from "@astrojs/mdx";
import { shield } from "@kindspells/astro-shield";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://joshestein.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), shield({})],
});

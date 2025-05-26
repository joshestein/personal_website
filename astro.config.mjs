// @ts-check
import { resolve } from "node:path";

import mdx from "@astrojs/mdx";
import { shield } from "@kindspells/astro-shield";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const rootDir = new URL(".", import.meta.url).pathname;
const modulePath = resolve(rootDir, "src", "generated", "sriHashes.mjs");

// https://astro.build/config
export default defineConfig({
  site: "https://joshestein.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    shield({
      sri: {
        enableMiddleware: true, // MUST be enabled for dynamic pages!
        hashesModule: modulePath, // SHOULD be set!
      },
      securityHeaders: {
        contentSecurityPolicy: {
          cspDirectives: {
            "default-src": "'self'",
            "style-src": "'self'",
            "font-src": "'self' data:",
            "base-uri": "'self'",
            "frame-ancestors": "'none'",
            "script-src": "'self'",
          },
        },
      },
    }),
  ],
});

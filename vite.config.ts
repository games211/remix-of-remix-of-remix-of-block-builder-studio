// Static site: prerender all routes to plain HTML at build time.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "cloudflare-module",
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
    },
    pages: [
      { path: "/" },
      { path: "/gradient" },
      { path: "/pixel-art" },
      { path: "/shape-generator" },
      { path: "/skin-editor" },
    ],
  },
});

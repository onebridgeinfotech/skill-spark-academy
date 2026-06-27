// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { coursePages } from "./src/lib/coursePages";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/courses",
  "/services",
  "/why-choose-us",
  "/generative-ai-course",
  "/privacy",
  "/security",
  ...coursePages
    .filter((c) => c.slug !== "generative-ai")
    .map((c) => `/courses/${c.slug}`),
];

export default defineConfig({
  cloudflare: false,
  vite: {
    server: {
      proxy: {
        "/api": { target: "http://localhost:3000", changeOrigin: true },
        "/admin": { target: "http://localhost:3000", changeOrigin: true },
      },
    },
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      pages: staticRoutes.map((path) => ({ path })),
    },
  },
});

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://angel-portfolio.netlify.app",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});

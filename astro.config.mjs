import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portafolio-de-contenidos.netlify.app",
  build: {
    inlineStylesheets: "never",
  },
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

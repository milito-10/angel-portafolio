import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://portafolio-de-contenidos.netlify.app",
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

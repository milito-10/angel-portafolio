import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

function singleJsonEntry(filePath: string, id: string) {
  return file(filePath, {
    parser: (text) => ({ [id]: JSON.parse(text) }),
  });
}

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(["fotografia", "retratos", "videoclips", "eventos", "diseno-grafico"]),
      type: z.enum(["foto", "video"]),
      image: image(),
      videoUrl: z.string().optional(),
      description: z.string(),
      client: z.string().optional(),
      date: z.preprocess(
        (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value),
        z.string(),
      ),
      published: z.boolean().default(true),
      sample: z.boolean().default(false),
    }),
});

const settings = defineCollection({
  loader: singleJsonEntry("./src/content/data/site-settings.json", "site-settings"),
  schema: ({ image }) =>
    z.object({
      whatsappNumber: z.string(),
      instagramUrl: z.string(),
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      bio: z.string(),
      portrait: image(),
    }),
});

const featured = defineCollection({
  loader: singleJsonEntry("./src/content/data/featured.json", "featured"),
  schema: z.object({ items: z.array(z.string()) }),
});

const galleryOrder = defineCollection({
  loader: singleJsonEntry("./src/content/data/gallery-order.json", "gallery-order"),
  schema: z.object({ items: z.array(z.string()) }),
});

const brands = defineCollection({
  loader: singleJsonEntry("./src/content/data/brands.json", "brands"),
  schema: ({ image }) =>
    z.object({
      items: z.array(
        z.object({
          name: z.string(),
          logo: image(),
          link: z.string().optional(),
        }),
      ),
    }),
});

export const collections = { works, settings, featured, galleryOrder, brands };

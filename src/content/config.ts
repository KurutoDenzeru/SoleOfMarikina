import { defineCollection, z } from "astro:content";

const stores = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    logo: z.string(),
    logoInvert: z.boolean().default(false),
    mapTop: z.string(),
    mapLeft: z.string(),
    mapPinSide: z.enum(["left", "right"]),
    address: z.string(),
    heroTitle: z.string(),
    intro: z.string(),
    storyIntro: z.string(),
    contactName: z.string(),
    city: z.string(),
    phone: z.string(),
    email: z.string(),
    location: z.string(),
    facebook: z.string(),
    instagram: z.string(),
    ctaLabel: z.string(),
  }),
});

const storeSections = defineCollection({
  type: "data",
  schema: z.object({
    storeSlug: z.string(),
    sectionSlug: z.enum(["walk-with-them", "souls-behind-the-soles", "their-products"]),
    title: z.string(),
    body: z.string(),
    cards: z
      .array(
        z.object({
          title: z.string(),
          href: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = {
  stores,
  storeSections,
};

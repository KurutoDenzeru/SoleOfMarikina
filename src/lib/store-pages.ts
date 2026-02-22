export type StoreSlug = "nico-angelo" | "brads-trendies" | "seacrest";
export type StoreSectionSlug =
  | "walk-with-them"
  | "souls-behind-the-soles"
  | "their-products";

export type StoreData = {
  slug: StoreSlug;
  name: string;
  logo: string;
  logoInvert: boolean;
  mapTop: string;
  mapLeft: string;
  mapPinSide: "left" | "right";
  address: string;
  heroTitle: string;
  intro: string;
  storyIntro: string;
  contactName: string;
  city: string;
  phone: string;
  email: string;
  location: string;
  facebook: string;
  instagram: string;
  ctaLabel: string;
};

export type StoreCard = {
  title: string;
  href: string;
};

export type StoreSectionData = {
  storeSlug: StoreSlug;
  sectionSlug: StoreSectionSlug;
  title: string;
  body: string;
  cards: StoreCard[];
};

export const stores: StoreData[] = [
  {
    slug: "brads-trendies",
    name: "Brad's Trendies",
    logo: "/Logo/Brads Trendies.webp",
    logoInvert: false,
    mapTop: "18%",
    mapLeft: "52%",
    mapPinSide: "right",
    address: "14 Shoe Ave. Sta. Elena, Marikina",
    heroTitle: "Brad's Trendies",
    intro:
      "Brad's Trendies is a neighborhood footwear house built on craft, comfort, and consistency. Every pair is curated with daily movement in mind, balancing practical durability with a clean classic profile.",
    storyIntro:
      "Get closer to the people and process behind Brad's Trendies. From material selection to final finishing, each release is shaped by hands-on care and a deep respect for everyday wear.",
    contactName: "Brad Trendles",
    city: "Marikina",
    phone: "09170000000",
    email: "bradstrendies@gmail.com",
    location: "14 Shoe Ave. Sta. Elena, Marikina",
    facebook: "#",
    instagram: "#",
    ctaLabel: "See our story",
  },
  {
    slug: "nico-angelo",
    name: "Nico Angelo",
    logo: "/Logo/Nico Angelo Logo.webp",
    logoInvert: true,
    mapTop: "46%",
    mapLeft: "49%",
    mapPinSide: "left",
    address: "3 Narra St. Cristina Vil Concepcion Uno",
    heroTitle: "Nico Angelo Leather Classic",
    intro:
      "Since its inception in 1996, Nico Angelo Leather Classics has remained steadfast in its commitment to the art of traditional leatherworking. Born from a passion for timeless aesthetics and superior materials, the brand has spent nearly three decades perfecting the balance between rugged durability and refined elegance",
    storyIntro:
      "Step into the workshop of Nico Angelo Leather Classics, where heritage has been hand-stitched into every hide since 1996. We invite you to witness the artistry, the passion, and the decades of tradition behind our most iconic pieces. Discover a story of timeless elegance-one grain at a time.",
    contactName: "Nick M. Dela Paz",
    city: "Marikina",
    phone: "09175003348",
    email: "angelo.shoes@yahoo.com",
    location: "Nara St. Cristina Vil Concepcion Uno",
    facebook: "#",
    instagram: "#",
    ctaLabel: "See our story",
  },
  {
    slug: "seacrest",
    name: "Seacrest",
    logo: "/Logo/Seacrest.webp",
    logoInvert: false,
    mapTop: "60%",
    mapLeft: "25%",
    mapPinSide: "right",
    address: "9 J.P. Rizal St. Calumpang, Marikina",
    heroTitle: "Seacrest",
    intro:
      "Seacrest brings streamlined silhouettes and sturdy leather builds together for people who want dependable shoes with a sharp finish. The studio focuses on quality first, with details that age beautifully over time.",
    storyIntro:
      "Inside Seacrest, the work is intentional and tactile. From cutting to stitching to edge finishing, each stage is handled with discipline so every pair leaves the bench ready for long-term wear.",
    contactName: "Seacrest Team",
    city: "Marikina",
    phone: "09171111111",
    email: "seacrest@gmail.com",
    location: "9 J.P. Rizal St. Calumpang, Marikina",
    facebook: "#",
    instagram: "#",
    ctaLabel: "See our story",
  },
];

export const storeOrder: StoreSlug[] = [
  "brads-trendies",
  "nico-angelo",
  "seacrest",
];

export const sections: StoreSectionSlug[] = [
  "walk-with-them",
  "souls-behind-the-soles",
  "their-products",
];

export function sectionCards(storeSlug: StoreSlug): StoreCard[] {
  if (storeSlug === "nico-angelo") {
    return [
      {
        title: "SOULS BEHIND\nTHE SOLES",
        href: `/stores/${storeSlug}/souls-behind-the-soles-story`,
      },
      {
        title: "HIDE TO HEEL",
        href: `/stores/${storeSlug}/hide-to-heels`,
      },
    ];
  }

  return [
    {
      title: "SOULS BEHIND\nTHE SOLES",
      href: `/stores/${storeSlug}/souls-behind-the-soles`,
    },
    {
      title: "HIDE TO HEEL",
      href: `/stores/${storeSlug}/their-products`,
    },
  ];
}

export function landingCards(storeSlug: StoreSlug): StoreCard[] {
  return [
    { title: "WALK WITH\nTHEM", href: `/stores/${storeSlug}/walk-with-them` },
    {
      title: "SOULS BEHIND\nTHE SOLES",
      href: `/stores/${storeSlug}/souls-behind-the-soles`,
    },
    { title: "THEIR\nPRODUCTS", href: `/stores/${storeSlug}/their-products` },
  ];
}

export const storeSections: StoreSectionData[] = stores.flatMap((store) => [
  {
    storeSlug: store.slug,
    sectionSlug: "walk-with-them",
    title: "WALK WITH THEM",
    body: store.intro,
    cards: [],
  },
  {
    storeSlug: store.slug,
    sectionSlug: "souls-behind-the-soles",
    title: "SOULS BEHIND THE SOLES",
    body: store.storyIntro,
    cards: sectionCards(store.slug),
  },
  {
    storeSlug: store.slug,
    sectionSlug: "their-products",
    title: "THEIR PRODUCTS",
    body:
      store.slug === "nico-angelo"
        ? "Explore Nico Angelo Leather Classics products built from quality hide, careful stitching, and time-tested construction. Every release is designed for daily wear while preserving the character and elegance that define the house."
        : store.slug === "brads-trendies"
          ? "Brad's Trendies product lines focus on practical versatility, grounded comfort, and long-term wear. Every silhouette is selected and refined for movement, utility, and easy styling."
          : "Seacrest products are shaped by precision and built for repeat wear. Materials are chosen for structure and comfort, then finished with details that keep the pair clean, durable, and timeless.",
    cards: sectionCards(store.slug),
  },
]);

export function getStoreBySlug(slug: string): StoreData | undefined {
  return stores.find((store) => store.slug === slug);
}

export function getStoreSection(
  storeSlug: string,
  sectionSlug: string
): StoreSectionData | undefined {
  return storeSections.find(
    (section) =>
      section.storeSlug === storeSlug && section.sectionSlug === sectionSlug
  );
}

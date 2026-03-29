export type StoreSlug = "nico-angelo" | "brads-trendies" | "seacrest";
export type StoreSectionSlug = "wtw" | "sts" | "their-products";

export type StoreData = {
  slug: StoreSlug;
  name: string;
  logo: string;
  logoInvert: boolean;
  mapUrl: string;
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
  body: string;
  ctaLabel: string;
};

export type StoreProduct = {
  name: string;
  price: string;
  image: string;
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
    mapUrl: "https://maps.app.goo.gl/3HiepruaFfE7TG4W6",
    mapTop: "17%",
    mapLeft: "54%",
    mapPinSide: "right",
    address: "14 Shoe Ave. Sta. Elena, Marikina",
    heroTitle: "Brad's Trendies",
    intro:
      "Brad's Trendies is a homegrown Filipino footwear brand based in Marikina City, the shoe capital of the Philippines. Established in 2022 by Alicia Kate Bermundo, the brand carries on a multigenerational family legacy of traditional shoemakers by blending expert local craftsmanship with modern, minimalist aesthetic.",
    storyIntro:
      "A documentary exploring the revival of Marikina's shoemaking tradition through the eyes of a new generation. Witness the fusion of genuine leather, family legacy, and the modern Filipino spirit.",
    contactName: "Alicia Kate Bermundo",
    city: "Marikina",
    phone: "0969 619 8222",
    email: "bradstrendies@gmail.com",
    location: "5 Marcelo St. Nangka",
    facebook: "https://www.facebook.com/bradstrendies",
    instagram: "#",
    ctaLabel: "See our story",
  },
  {
    slug: "nico-angelo",
    name: "Nico Angelo",
    logo: "/Logo/Nico Angelo Logo.webp",
    logoInvert: true,
    mapUrl: "https://maps.app.goo.gl/pRu6gKwEp2mRpAaV8",
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
    facebook: "https://www.facebook.com/profile.php?id=61580780770102",
    instagram: "#",
    ctaLabel: "See our story",
  },
  {
    slug: "seacrest",
    name: "Seacrest",
    logo: "/Logo/Seacrest.webp",
    logoInvert: false,
    mapUrl: "https://maps.app.goo.gl/MruDj1vVQSdBj1Sd9",
    mapTop: "60%",
    mapLeft: "25%",
    mapPinSide: "right",
    address: "10 Helena St. Sta Teresita Malanday",
    heroTitle: "Seacrest",
    intro:
      'Established in 1997, Seacrest is a Marikina-based shoe brand owned by Larry Evaristo that is best known for its durable, high-quality footwear crafted using specialized "one-piece leather technology." The business operates as a family-run factory, blending traditional handmade techniques with a resilient spirit that has helped it remain a staple in the Philippine shoe industry for over two decades.',
    storyIntro:
      'Redefine your stride with Seacrest, a Marikina staple established in 1997 by Larry Evaristo that defines the gold standard of Filipino shoemaking. Every pair is crafted with tireless dedication and our signature "one-piece leather technology," ensuring a perfect blend of modern luxury and unrivaled durability.',
    contactName: "Larry Evaristo",
    city: "Marikina",
    phone: "0993 728 4969",
    email: "topsiderSeacrest@gmail.com",
    location: "10 Helena St. Sta Teresita Malanday",
    facebook: "https://www.facebook.com/seacrestmarikina",
    instagram: "https://www.instagram.com/seacrestmarikina/?hl=en",
    ctaLabel: "See our story",
  },
];

export const storeOrder: StoreSlug[] = [
  "brads-trendies",
  "nico-angelo",
  "seacrest",
];

export const storeProducts: Record<StoreSlug, StoreProduct[]> = {
  "brads-trendies": [
    {
      name: "GG Leather",
      price: "₱ 600",
      image: "/pictures/Brad%20Trendies/products/brads%20gg%20leather.png",
    },
    {
      name: "Slip On",
      price: "₱ 800",
      image: "/pictures/Brad%20Trendies/products/brads%20slip%20on.png",
    },
    {
      name: "AA Clogs Leather",
      price: "₱ 1,500",
      image:
        "/pictures/Brad%20Trendies/products/brads%20aa%20clogs%20leathers.png",
    },
    {
      name: "A4 Clogs",
      price: "₱ 1,500",
      image: "/pictures/Brad%20Trendies/products/brads%20clogs.png",
    },
    {
      name: "S1",
      price: "₱ 2,000",
      image: "/pictures/Brad%20Trendies/products/brads1.png",
    },
  ],
  "nico-angelo": [
    {
      name: "Slippers",
      price: "₱ 900",
      image: "/pictures/Nico%20Angelo/products/nico%20angelo%20slippers.png",
    },
    {
      name: "Elevated",
      price: "₱ 1,000",
      image: "/pictures/Nico%20Angelo/products/nico%20angelo%20elevated.png",
    },
    {
      name: "Topsider",
      price: "₱ 1,000",
      image: "/pictures/Nico%20Angelo/products/nico%20angelo%20topsider.png",
    },
    {
      name: "BGH",
      price: "₱ 1,700",
      image: "/pictures/Nico%20Angelo/products/nico%20angelo%20bgh%2068.png",
    },
    {
      name: "Wingtip",
      price: "₱ 2,500",
      image: "/pictures/Nico%20Angelo/products/nico%20angelo%20wingtip.png",
    },
  ],
  seacrest: [
    {
      name: "Topsider",
      price: "₱ 2,190",
      image: "/pictures/Seacrest/Topsider.jpg",
    },
    {
      name: "Slip On",
      price: "₱ 800-900",
      image: "/pictures/Seacrest/Slip-on.jpg",
    },
    {
      name: "Loafers",
      price: "₱ 1,700",
      image: "/pictures/Seacrest/Loafers.jpg",
    },
    {
      name: "Riderboots",
      price: "₱ 3,200",
      image: "/pictures/Seacrest/Riderboots.jpg",
    },
    {
      name: "Captoe",
      price: "₱ 4,000",
      image: "/pictures/Seacrest/Captoe.jpg",
    },
  ],
};

export const sections: StoreSectionSlug[] = ["wtw", "sts", "their-products"];

export function sectionCards(storeSlug: StoreSlug): StoreCard[] {
  if (
    storeSlug === "nico-angelo" ||
    storeSlug === "brads-trendies" ||
    storeSlug === "seacrest"
  ) {
    return [
      {
        title: "SOULS BEHIND\nTHE SOLES",
        href: `/stores/${storeSlug}/sbts`,
        body: "Discover the stories of the shoemakers behind the craft",
        ctaLabel: "Watch Now",
      },
      {
        title: "HIDE TO HEEL",
        href: `/stores/${storeSlug}/hth`,
        body: "Follow the journey of a Marikina shoe, from raw material to finished craft",
        ctaLabel: "See The Process",
      },
    ];
  }

  return [
    {
      title: "SOULS BEHIND\nTHE SOLES",
      href: `/stores/${storeSlug}/sbts`,
      body: "Discover the stories of the shoemakers behind the craft",
      ctaLabel: "Watch Now",
    },
    {
      title: "HIDE TO HEEL",
      href: `/stores/${storeSlug}/their-products`,
      body: "Follow the journey of a Marikina shoe, from raw material to finished craft",
      ctaLabel: "See The Process",
    },
  ];
}

export function landingCards(storeSlug: StoreSlug): StoreCard[] {
  const soulsHref =
    storeSlug === "nico-angelo" ||
    storeSlug === "brads-trendies" ||
    storeSlug === "seacrest"
      ? `/stores/${storeSlug}/sbts`
      : `/stores/${storeSlug}/sbts`;

  return [
    {
      title: "WALK WITH\nTHEM",
      href: `/stores/${storeSlug}/wtw`,
      body: "Trace the history, find the socials, and connect directly with the creators behind the craft.",
      ctaLabel: "Get to Know Them",
    },
    {
      title: "SOULS BEHIND\nTHE SOLES",
      href: soulsHref,
      body: "Discover the stories of the shoemakers behind the craft.",
      ctaLabel: "Watch Now",
    },
    {
      title: "THEIR\nPRODUCTS",
      href: `/stores/${storeSlug}/their-products`,
      body: "Support Marikina shoemakers by choosing locally crafted footwear.",
      ctaLabel: "See Products",
    },
  ];
}

export const storeSections: StoreSectionData[] = stores.flatMap((store) => [
  {
    storeSlug: store.slug,
    sectionSlug: "wtw",
    title: "WALK WITH THEM",
    body: store.intro,
    cards: [],
  },
  {
    storeSlug: store.slug,
    sectionSlug: "sts",
    title: "SEE OUR STORY",
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

export function getStoreProducts(slug: StoreSlug): StoreProduct[] {
  return storeProducts[slug];
}

export function getStoreSection(
  storeSlug: string,
  sectionSlug: string,
): StoreSectionData | undefined {
  return storeSections.find(
    (section) =>
      section.storeSlug === storeSlug && section.sectionSlug === sectionSlug,
  );
}

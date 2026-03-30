import type { StoreSlug } from "@/lib/store-pages";

export type ProductCatalogItem = {
  slug: string;
  name: string;
  price: string;
  image: string;
  description: string;
  bulletPoints: string[];
  checkUrl?: string;
};

export type StoreProductCatalog = {
  slug: StoreSlug;
  logo: string;
  logoAlt: string;
  contactUrl?: string;
  products: ProductCatalogItem[];
};

export const productCatalogByStore: Record<StoreSlug, StoreProductCatalog> = {
  "nico-angelo": {
    slug: "nico-angelo",
    logo: "/Logo/Nico Angelo Logo.webp",
    logoAlt: "Nico Angelo",
    contactUrl:
      "https://www.facebook.com/p/Nico-Angelo-Leather-Classics-61576069474480/",
    products: [
      {
        slug: "elevated",
        name: "Elevated",
        price: "₱ 1,000",
        image: "/products/Nico/nico%20angelo%20elevated.jpg",
        description:
          "These sleek shoes feature a high-gloss patent synthetic leather exterior paired with a breathable pigskin insole for all-day comfort. Built on a durable rubber outsole, they offer the perfect balance of sophisticated style and reliable traction.",
        bulletPoints: [
          "Material: Patent synthetic leather",
          "Parts: Insole pig skin, Outsole Rubber",
        ],
      },
      {
        slug: "slippers",
        name: "Slippers",
        price: "₱ 900",
        image: "/products/Nico/nico%20angelo%20sandalas.jpg",
        description:
          "Crafted from premium cow leather, these shoes offer a timeless, durable finish that ages beautifully with every wear. The combination of a breathable pigskin insole and a sturdy rubber outsole ensures superior comfort and reliable grip for any journey.",
        bulletPoints: [
          "Material: Cow leather",
          "Parts: Insole pig skin, Outsole Rubber",
        ],
      },
      {
        slug: "topsider",
        name: "Topsider",
        price: "₱ 1,000",
        image: "/products/Nico/nico%20angelo%20topsider.jpg",
        description:
          "These classic topsiders are crafted from premium cow leather, offering a durable and timeless nautical aesthetic that only gets better with age. A breathable pigskin insole is paired with a sturdy rubber outsole to provide the perfect balance of comfort and traction for any adventure.",
        bulletPoints: [
          "Material: Cow leather",
          "Parts: Insole pig skin, Outsole Rubber",
        ],
      },
      {
        slug: "wingtip",
        name: "Wingtip",
        price: "₱ 2,500",
        image: "/products/Nico/nico%20angelo%20wingtip.jpg",
        description:
          "These wingtip shoes are crafted from premium cow leather, featuring classic perforated detailing for a timeless and sophisticated look. A breathable pigskin insole and durable rubber outsole ensure that this traditional style remains comfortable and grounded for any occasion.",
        bulletPoints: [
          "Material: Cow leather",
          "Parts: Insole pig skin, Outsole Rubber",
        ],
      },
      {
        slug: "bgh",
        name: "BGH 68",
        price: "₱ 1,700",
        image: "/products/Nico/nico%20angelo%20bgh.jpg",
        description:
          "These boots are crafted from premium cow leather, offering a rugged and durable exterior designed for lasting wear. A breathable pigskin insole and a sturdy rubber outsole provide the perfect combination of all-day comfort and reliable traction for any terrain.",
        bulletPoints: [
          "Material: Cow leather",
          "Parts: Insole pig skin, Outsole Rubber",
        ],
      },
    ],
  },
  "brads-trendies": {
    slug: "brads-trendies",
    logo: "/Logo/Brads Trendies.webp",
    logoAlt: "Brad's Trendies",
    products: [
      {
        slug: "aa-genuine-leather-clogs",
        name: "AA Genuine Leather Clogs",
        price: "₱ 2,000",
        image: "/products/Brads/Brad_s%20AA%20Clogs%20Genuine%20Leather.jpg",
        checkUrl: "https://www.tiktok.com/view/product/1731647076011247515",
        description:
          "These AA Genuine Leather Clogs are crafted from cowhide genuine leather for a premium, long-lasting finish that naturally adapts to your foot. Featuring a secure metal lock and adjustable strap on a PVC mixed rubber sole, they offer a perfect blend of customized fit and reliable durability.",
        bulletPoints: [
          "Material: Cow Hide Genuine leather",
          "Parts: Metal lock, Strap, PVC mixed rubber sole",
        ],
      },
      {
        slug: "synthetic-suede-leather-black",
        name: "Synthetic Suede Leather",
        price: "₱ 570-700",
        image: "/products/Brads/Brad_s%20black%20synthethic%20suede.jpg",
        checkUrl: "https://ph.shp.ee/k2xf3vqH",
        description:
          "These Synthetic Suede Leather sandals are crafted with a soft synthetic suede upper and an adjustable strap for a secure, comfortable fit. The specialized softbed and cork suede foam layers provide exceptional cushioning and support, all grounded by a durable rubber outsole for lasting traction.",
        bulletPoints: [
          "Material: Synthetic Suede Leather",
          "Parts: Strap, Softbed suede type foam, Cork suede foam, Outsole Rubber",
        ],
      },
      {
        slug: "synthetic-suede-leather-beige",
        name: "Synthetic Suede Leather",
        price: "₱ 570-700",
        image: "/products/Brads/Brad_s%20Beige%20Synthetic%20Suede.jpg",
        checkUrl: "https://ph.shp.ee/k2xf3vqH",
        description:
          "These Synthetic Suede Leather sandals are crafted with a soft synthetic suede upper and an adjustable strap for a secure, comfortable fit. The specialized softbed and cork suede foam layers provide exceptional cushioning and support, all grounded by a durable rubber outsole for lasting traction.",
        bulletPoints: [
          "Material: Synthetic Suede Leather",
          "Parts: Strap, Softbed suede type foam, Cork suede foam, Outsole Rubber",
        ],
      },
      {
        slug: "s1",
        name: "S1",
        price: "₱ 2,500",
        image: "/products/Brads/Brad_s%20S1.jpg",
        checkUrl: "https://vt.tiktok.com/ZS9RTW349hNQE-vM306/",
        description:
          "These S1 shoes are crafted from premium genuine leather, offering a sophisticated and durable finish for any occasion. A soft, suede-type genuine leather foam insole provides breathable cushioning, while the sturdy rubber outsole ensures reliable traction and all-day comfort.",
        bulletPoints: [
          "Material: Genuine Leather",
          "Parts: Genuine Leather suede type foam, Outsole Rubber",
        ],
      },
      {
        slug: "birkens-genuine-leather",
        name: "Birkens Genuine Leather",
        price: "₱ 2,500",
        image: "/products/Brads/Brad_s%20Birkens.jpg",
        checkUrl: "https://www.tiktok.com/view/product/1732075821496502171",
        description:
          "These Birkens Genuine Leather sandals are crafted from high-quality genuine leather, offering a timeless and durable finish that molds to your foot. Featuring a resilient PVC mixed rubber sole, they provide the perfect balance of flexibility and long-lasting traction for daily wear.",
        bulletPoints: [
          "Material: Genuine Leather",
          "Parts: PVC mixed rubber sole",
        ],
      },
    ],
  },
  seacrest: {
    slug: "seacrest",
    logo: "/Logo/Seacrest.webp",
    logoAlt: "Seacrest",
    products: [
      {
        slug: "cambridge-cardinal",
        name: "Cambridge Cardinal",
        price: "₱ 2,190",
        image:
          "/products/Seacrest/Seacrest%20Brouge%20-%20Cambridge%20Cardinal.jpg",
        checkUrl:
          "https://shopee.ph/Seacrest-Cambridge-Sepia-i.852845449.26050597032",
        description:
          "These wingtip shoes are crafted from premium genuine cow leather, featuring classic perforated detailing for a sophisticated and timeless look. A soft leather footbed is paired with a non-slip rubber outsole to provide the perfect balance of refined style and steady comfort.",
        bulletPoints: [
          "Material: Genuine Cow Leather",
          "Parts: Soft leather footbed, Non-slip rubber consoler",
        ],
      },
      {
        slug: "mens-topsider-ocean",
        name: "Men’s Topsider Ocean",
        price: "₱ 2,190",
        image: "/products/Seacrest/Seacrest%20Men_s%20Topsider%20Ocean.jpg",
        checkUrl:
          "https://shopee.ph/Seacrest-Men's-Topsiders-Ocean-i.852845449.16283743436",
        description:
          "The Men's Topsider Ocean is built from durable genuine cow leather, offering a rugged yet polished nautical aesthetic that ages beautifully. Featuring a soft leather footbed and a non-slip rubber outsole, these shoes ensure all-day comfort and reliable traction for any adventure.",
        bulletPoints: [
          "Material: Genuine Cow Leather",
          "Parts: Soft leather footbed, Non-slip rubber consoler",
        ],
      },
      {
        slug: "mens-topsider-navigator",
        name: "Men’s Topsider Navigator",
        price: "₱ 2,190",
        image: "/products/Seacrest/Seacrest%20Men_s%20Topsider%20Navigator.jpg",
        checkUrl:
          "https://shopee.ph/Seacrest-Men's-Topsiders-Navigator-i.852845449.21640244991",
        description:
          "The Men's Topsider Navigator features a high-quality genuine cow leather exterior designed for lasting wear. A soft leather footbed and a non-slip rubber outsole work together to provide a secure grip and a cushioned feel with every step.",
        bulletPoints: [
          "Material: Genuine Cow Leather",
          "Parts: Soft leather footbed, Non-slip rubber consoler",
        ],
      },
      {
        slug: "womens-topsider-forest-green",
        name: "Women’s Topsider Forest Green",
        price: "₱ 2,190",
        image:
          "/products/Seacrest/Seacrest%20Women_s%20Topsiders%20-%20Forest%20Green.jpg",
        checkUrl:
          "https://shopee.ph/Seacrest-Women's-Topsiders-Forest-Green-i.852845449.21240248390",
        description:
          "The Women's Topsider Forest Green combines a unique, earthy aesthetic with the premium durability of genuine cow leather. This pair features a soft leather footbed and a non-slip rubber outsole, ensuring a comfortable, grounded fit that complements any casual wardrobe.",
        bulletPoints: [
          "Material: Genuine Cow Leather",
          "Parts: Soft leather footbed, Non-slip rubber consoler",
        ],
      },
      {
        slug: "womens-topsider-navigator",
        name: "Women’s Topsider Navigator",
        price: "₱ 2,190",
        image:
          "/products/Seacrest/Seacrest%20Women_s%20Topsiders%20-%20Navigator.jpg",
        checkUrl:
          "https://shopee.ph/Seacrest-Women's-Topsiders-Navigator-i.852845449.20840250310",
        description:
          "These Women's Topsider Navigator shoes are meticulously crafted from genuine cow leather for a sleek and functional design. Equipped with a soft leather footbed and a non-slip rubber outsole, they offer superior support and stability for your daily journeys.",
        bulletPoints: [
          "Material: Genuine Cow Leather",
          "Parts: Soft leather footbed, Non-slip rubber consoler",
        ],
      },
    ],
  },
};

export function getProductCatalogByStore(
  slug: StoreSlug,
): StoreProductCatalog | undefined {
  return productCatalogByStore[slug];
}

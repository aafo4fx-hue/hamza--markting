export type ColorVariant = {
  name: string;
  nameAr: string;
  code: string;
  images: string[];
};

export type StorageVariant = {
  label: string;
  price: number;
  salePrice: number | null;
};

export type NormalizedProduct = {
  id: string;
  name: string;
  brief: string;
  tagline: string;
  description: string;
  colors: ColorVariant[];
  storage: StorageVariant[];
  installmentMonths: number;
  downPaymentFrom: number;
  availabilityStatus: "preorder" | "available" | "soldout";
  freeDelivery: boolean;
  deliveryTime: string;
  warrantyYears: number;
  taxIncluded: boolean;
};

export const PRODUCT: NormalizedProduct = {
  id: "iphone-18-pro-max",
  name: "أبل آيفون 18 برو ماكس",
  brief: "فخامة من أول نظرة، وقوة تخليك تعمل أكثر مع آيفون 18 برو ماكس الجديد.",
  tagline: "المستقبل بين يديك",
  description:
    "استمتع بتجربة استثنائية مع آيفون 18 برو ماكس، المصمم ليجمع بين الفخامة والقوة في كل تفاصيله. شاشة 6.9 بوصة تمنحك تجربة مشاهدة غامرة، وشريحة A20 Pro توفر سرعة وأداءً استثنائيًا، بينما تمنحك الكاميرات الاحترافية صورًا وفيديوهات مذهلة في مختلف الظروف.",
  colors: [
    {
      name: "Burgundy",
      nameAr: "برجاندي",
      code: "#800020",
      images: [
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143815/34ab662e-de1b-4359-9d99-43e2ba54678f_1_zd9s2s.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789144346/68a6112d-56da-4755-9a83-006a073eed2d_1_rnhta5.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789144351/795ee711-d215-49ac-af72-1d2bb78b4507_1_iyr3w2.webp",
      ],
    },
    {
      name: "Glacier",
      nameAr: "جلاسيير",
      code: "#DCE6F0",
      images: [
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143815/96bef8db-6a7f-4361-b75b-330d54685d37_1_fdqp0g.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145171/6d366922-e17f-44d7-94b8-e8372c599cd7_ryrgf9.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145167/6b5e6097-9346-4d50-a6d9-6dcfc3125234_uxcznc.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145222/b23c542a-4cfb-400d-a99d-f02ed9b882d9_ur8ryj.webp",
      ],
    },
    {
      name: "Silver",
      nameAr: "سيلفر",
      code: "#E8E8E8",
      images: [
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143812/11984507-b78d-47a8-b943-640b6cfe5bdf_1_sgzf22.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145173/5bb906c1-f216-4cca-866b-fa9975e5aabd_c65wfh.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145171/a211a08e-f6cf-4d4a-9e68-49ff2f98a3a0_usvl7h.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145166/6c97405a-1994-458e-99a8-334b485c6926_gdybt4.webp",
      ],
    },
    {
      name: "Black",
      nameAr: "أسود",
      code: "#1a1a1a",
      images: [
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143815/9be64aca-f6ba-41a9-9cd9-ae7fc833ee72_1_ag7zws.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145170/c1e8988b-72ef-436d-adbd-7acc73a1c1b6_e9abk1.webp",
        "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789145167/db4ac83b-0e1c-4d17-99ec-676762c87997_lxrike.webp",
      ],
    },
  ],
  storage: [
    { label: "256GB", price: 6299, salePrice: null },
    { label: "512GB", price: 7299, salePrice: null },
    { label: "1TB",   price: 8299, salePrice: null },
    { label: "2TB",   price: 9500, salePrice: null },
  ],
  installmentMonths: 24,
  downPaymentFrom: 1000,
  availabilityStatus: "preorder",
  freeDelivery: true,
  deliveryTime: "24 ساعة",
  warrantyYears: 2,
  taxIncluded: true,
};

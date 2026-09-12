import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const BASE_URL = "https://www.madarstorre.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "لمسة | قسّط بسعر الكاش · iPhone 18 Pro Max",
  description: "احجز iPhone 18 Pro Max من لمسة — قسّط حتى 24 شهر بنفس سعر الكاش، بدون فوائد مخفية. دفعة أولى من 1,000 ريال.",
  openGraph: {
    title: "لمسة | قسّط بسعر الكاش · iPhone 18 Pro Max",
    description: "احجز iPhone 18 Pro Max من لمسة — قسّط حتى 24 شهر بنفس سعر الكاش، بدون فوائد مخفية. دفعة أولى من 1,000 ريال.",
    url: BASE_URL,
    siteName: "لمسة",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "لمسة - iPhone 18 Pro Max · قسّط بسعر الكاش",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "لمسة | قسّط بسعر الكاش · iPhone 18 Pro Max",
    description: "احجز iPhone 18 Pro Max من لمسة — قسّط حتى 24 شهر بنفس سعر الكاش، بدون فوائد مخفية.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}

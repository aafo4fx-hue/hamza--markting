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
      <body>
        {children}
        <a
          href="https://wa.me/966590316881?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D9%85%D8%B3%D8%A8%D9%82%20%D9%84%D9%80%20iPhone%2018%20Pro%20Max"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm px-5 py-3 rounded-2xl shadow-xl shadow-green-400/40 transition-all hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          احجز مسبقًا الآن
        </a>
      </body>
    </html>
  );
}

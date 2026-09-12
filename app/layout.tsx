import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "لمسة | iPhone 18 Pro Max بالتقسيط بسعر الكاش",
  description: "احجز iPhone 18 Pro Max من لمسة واستفد من عرض التقسيط بسعر الكاش.",
  openGraph: {
    title: "لمسة | iPhone 18 Pro Max بالتقسيط بسعر الكاش",
    description: "احجز iPhone 18 Pro Max من لمسة واستفد من عرض التقسيط بسعر الكاش.",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "لمسة - iPhone 18 Pro Max",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "لمسة | iPhone 18 Pro Max بالتقسيط بسعر الكاش",
    description: "احجز iPhone 18 Pro Max من لمسة واستفد من عرض التقسيط بسعر الكاش.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}

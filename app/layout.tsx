import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iPhone 18 Pro Max | الحجز المسبق",
  description: "احجز iPhone 18 Pro Max مسبقًا واستفد من عرض التقسيط بسعر الكاش.",
  openGraph: {
    title: "iPhone 18 Pro Max | الحجز المسبق",
    description: "احجز iPhone 18 Pro Max مسبقًا واستفد من عرض التقسيط بسعر الكاش.",
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone 18 Pro Max | الحجز المسبق",
    description: "احجز iPhone 18 Pro Max مسبقًا واستفد من عرض التقسيط بسعر الكاش.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}

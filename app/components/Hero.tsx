"use client";
import Image from "next/image";
import { NormalizedProduct } from "../data/product";
import { IconCheck, IconWhatsapp } from "./Icons";

const WHATSAPP = "966590316881";

export default function Hero({ product }: { product: NormalizedProduct }) {
  const basePrice = product.storage[0].price.toLocaleString("ar-SA");

  const goWhatsapp = () => {
    const msg = encodeURIComponent("مرحباً، أريد الحجز المسبق لـ iPhone 18 Pro Max");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <Image src={product.colors[0].images[0]} alt={product.name} fill priority
          className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-14 pt-24 w-full">
        <div className="max-w-lg">
          <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            🔥 الحجز المسبق متاح الآن
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-2">
            iPhone 18<br />
            <span className="text-amber-500">Pro Max</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 max-w-md">
            {product.brief}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {["6.9″ OLED", "A20 Pro", "48MP × 3", "45h بطارية", "5G"].map((s) => (
              <span key={s} className="bg-gray-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-baseline gap-1.5 mb-5">
            <span className="text-gray-400 text-xs">يبدأ من</span>
            <span className="text-2xl sm:text-3xl font-black text-gray-900">{basePrice}</span>
            <span className="text-sm font-bold text-gray-500">ريال</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button onClick={goWhatsapp}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-400/30">
              <IconWhatsapp className="w-3.5 h-3.5" />
              احجز عبر واتساب
            </button>
            <a href="#showcase"
              className="flex items-center justify-center border-2 border-gray-300 text-gray-700 font-bold text-xs px-5 py-2.5 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-all">
              اكتشف الجهاز
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            {["توصيل مجاني خلال 24 ساعة", "ضمان سنتين", "شامل الضريبة"].map((t) => (
              <span key={t} className="flex items-center gap-1 text-gray-500 text-[11px] font-semibold">
                <IconCheck className="w-3 h-3 text-amber-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F8F7F4] to-transparent z-10" />
    </section>
  );
}

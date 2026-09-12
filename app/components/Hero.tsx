"use client";
import { useState } from "react";
import Image from "next/image";
import { NormalizedProduct } from "../data/product";
import { IconCheck, IconWhatsapp } from "./Icons";
import InstallmentPopup from "./InstallmentPopup";

const WHATSAPP = "966590316881";

export default function Hero({ product }: { product: NormalizedProduct }) {
  const basePrice = product.storage[0].price.toLocaleString("ar-SA");

  const [showPopup, setShowPopup] = useState(false);

  const goWhatsapp = () => {
    const msg = encodeURIComponent("مرحباً، أريد الحجز المسبق لـ iPhone 18 Pro Max");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setShowPopup(false);
  };

  return (
    <>
    {showPopup && <InstallmentPopup onConfirm={goWhatsapp} onClose={() => setShowPopup(false)} />}
    <section id="hero" className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <Image src={product.colors[0].images[0]} alt={product.name} fill priority
          className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-14 pt-32 w-full flex-1 flex items-center">
        <div className="max-w-lg">

          <span className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            💳 حجز مسبق · إطلاق قريباً
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            احجز جهازك قبل الإطلاق<br />
            <span className="text-amber-300">قسّط بسعر الكاش</span>
          </h1>

          <p className="text-white/70 text-sm leading-relaxed mb-5">
            بدون فوائد مخفية · نفس السعر تماماً · تقسيط حتى 24 شهر · دفعة أولى من 1,000 ريال
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 mb-5">
            <button onClick={() => setShowPopup(true)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-400/30">
              <IconWhatsapp className="w-3.5 h-3.5" />
              احجز مسبقًا الآن
            </button>
            <a href="#showcase"
              className="flex items-center justify-center border-2 border-amber-300 text-gray-900 bg-amber-300 font-bold text-xs px-5 py-2.5 rounded-xl transition-all">
              اكتشف الجهاز
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {["توصيل مجاني   ", "ضمان سنتين", "شامل الضريبة"].map((t) => (
              <span key={t} className="flex items-center gap-1 text-white/60 text-[11px] font-semibold">
                <IconCheck className="w-3 h-3 text-amber-300" />
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F8F7F4] to-transparent z-10" />
    </section>
    </>
  );
}

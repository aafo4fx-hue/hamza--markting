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

      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-14 pt-32 w-full flex-1 flex items-end">
        <div className="max-w-lg">

          <span className="inline-flex items-center gap-1.5 bg-amber-300/20 border border-amber-300/40 text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full mb-5 tracking-widest uppercase">
            💳 قسّط بسعر الكاش · بدون فوائد
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-snug mb-4">
            iPhone 18 Pro Max<br />
            <span className="text-amber-300">قسّط بسعر الكاش</span>{" "}
            <span className="text-white/90">مع لمسة</span>
          </h1>

          <p className="text-white/65 text-sm leading-loose mb-6">
            قسّط جهازك حتى 24 شهر <span className="text-amber-300 font-bold">بسعر الكاش</span> — بدون فوائد، بدون رسوم مخفية.<br />
            دفعة أولى <span className="text-white font-semibold">1,000 ريال فقط</span> والباقي على راحتك.<br />
            <span className="text-white/50 text-xs">🏆 كن من أوائل الحاصلين على iPhone 18 Pro Max</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 mb-6 max-w-[220px]">
            <button onClick={() => setShowPopup(true)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-400/30">
              <IconWhatsapp className="w-4 h-4" />
              احجز مسبقًا الآن
            </button>
            <a href="#showcase"
              className="flex items-center justify-center bg-amber-300 hover:bg-amber-400 text-gray-900 font-bold text-sm px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5">
              اكتشف الجهاز
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {["توصيل مجاني", "ضمان سنتين", "شامل الضريبة"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-white/55 text-[11px] font-semibold">
                <IconCheck className="w-3 h-3 text-amber-300" />
                {t}
              </span>
            ))}
          </div>



        </div>
      </div>


    </section>
    </>
  );
}

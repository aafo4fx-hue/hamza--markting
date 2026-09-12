"use client";
import { useState } from "react";
import Image from "next/image";
import { NormalizedProduct } from "../data/product";
import { IconWhatsapp, IconCheck, IconShield, IconTruck } from "./Icons";

const WHATSAPP = "966590316881";

export default function Showcase({ product }: { product: NormalizedProduct }) {
  const [colorIdx, setColorIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [storageIdx, setStorageIdx] = useState(0);

  const color = product.colors[colorIdx];
  const storage = product.storage[storageIdx];
  const price = (storage.salePrice ?? storage.price).toLocaleString("ar-SA");

  const changeColor = (i: number) => { setColorIdx(i); setImgIdx(0); };

  const goWhatsapp = () => {
    const msg = encodeURIComponent(
      `مرحباً، أريد الحجز المسبق لـ iPhone 18 Pro Max\nاللون: ${color.nameAr}\nالسعة: ${storage.label}\nالسعر: ${price} ريال`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section id="showcase" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1.5">اختر جهازك</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1.5">iPhone 18 Pro Max</h2>
        <p className="text-gray-400 text-sm mb-8">أربعة ألوان. أربع سعات. جهاز واحد يناسبك تمامًا.</p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center min-h-[380px] md:min-h-[460px]">
              <div className="absolute inset-0 rounded-3xl" style={{ background: `radial-gradient(circle at 50% 60%, ${color.code}22 0%, transparent 70%)` }} />
              <Image key={color.images[imgIdx]} src={color.images[imgIdx]} alt={color.nameAr}
                width={320} height={400} className="relative z-10 object-contain max-h-[380px] drop-shadow-2xl" />
            </div>
            <div className="flex gap-2 justify-center">
              {color.images.map((img, i) => (
                <button key={i} onClick={() => setImgIdx(i)}
                  className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${imgIdx === i ? "border-amber-400 shadow-md" : "border-gray-200 opacity-60 hover:opacity-100"}`}>
                  <Image src={img} alt="" width={64} height={80} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-7">
            {/* Color */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                اللون — <span className="text-gray-800 normal-case tracking-normal">{color.nameAr}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((c, i) => (
                  <button key={c.code} onClick={() => changeColor(i)} title={c.nameAr}
                    className={`w-9 h-9 rounded-full border-2 transition-all hover:scale-110 ${colorIdx === i ? "border-amber-400 scale-110 shadow-md" : "border-transparent shadow-sm"}`}
                    style={{ background: c.code }} />
                ))}
              </div>
            </div>

            {/* Storage */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">السعة التخزينية</p>
              <div className="flex flex-wrap gap-2">
                {product.storage.map((s, i) => (
                  <button key={s.label} onClick={() => setStorageIdx(i)}
                    className={`px-5 py-2.5 rounded-full border-2 text-sm font-bold transition-all ${storageIdx === i ? "border-amber-400 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-500 hover:border-gray-400"}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price card */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-gray-900">{price}</span>
                <span className="text-base font-bold text-gray-500">ريال</span>
              </div>
              <p className="text-xs text-gray-400">شامل الضريبة · توصيل مجاني خلال 24 ساعة</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <IconShield className="w-3.5 h-3.5" />, label: "ضمان سنتين" },
                { icon: <IconTruck className="w-3.5 h-3.5" />, label: "توصيل مجاني" },
                { icon: <IconCheck className="w-3.5 h-3.5" />, label: "أصلي 100%" },
              ].map((b) => (
                <span key={b.label} className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  {b.icon}{b.label}
                </span>
              ))}
            </div>

            <button onClick={goWhatsapp}
              className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base py-4 rounded-2xl transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-400/30">
              <IconWhatsapp className="w-5 h-5" />
              احجز عبر واتساب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

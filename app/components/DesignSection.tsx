"use client";
import { useState } from "react";
import Image from "next/image";

const features = [
  { id: "colors", label: "الألوان", title: "اختر من بين أربعة ألوان مميزة.", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789144351/795ee711-d215-49ac-af72-1d2bb78b4507_1_iyr3w2.webp" },
  { id: "frame", label: "الشاشة", title: "6.9 إنش Super Retina XDR مع ProMotion 120Hz.", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143385/892f3051-9737-4547-a9e3-357e169cca0e_bact8d.webp" },
  { id: "camera_main", label: "الكاميرا", title: "فتحة عدسة متغيرة 48MP Fusion — أداء استثنائي في الإضاءة الخافتة.", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143388/ea9233d4-4fb9-419f-a9c8-7e76a13d16a5_o23sbv.webp" },
  { id: "dynamic", label: "Dynamic Island", title: "تتبّع حتى ثلاثة أنشطة مباشرة في الوقت نفسه.", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143371/1fbb76ae-44b0-4d8a-b596-91b110bd251b_ronrmu.webp" },
  { id: "durability", label: "المتانة", title: "هيكل من قطعة واحدة من الألومنيوم ودرع السيراميك 2.", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143391/76a1b320-e6de-4cb7-8109-3eb06b192df3_soe7ux.webp" },
  { id: "action", label: "زر الإجراءات", title: "زر قابل للتخصيص — اضغط مطولاً لتشغيل الإجراء الذي تريده.", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143388/a991289c-76c5-4830-ab71-83a842a3e3b7_q7z0pk.webp" },
];

export default function DesignSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="design" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1.5">نظرة عن قرب</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8">تصميم يأسر النظر.</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {features.map((f, i) => (
            <button key={f.id} onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${active === i ? "bg-gray-900 text-white shadow-md" : "bg-white border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800"}`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Image + caption */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-100 min-h-[300px] md:min-h-[480px]">
          <Image key={features[active].image} src={features[active].image} alt={features[active].label}
            fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 1140px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <p className="text-white text-lg md:text-2xl font-bold max-w-xl leading-snug">
              {features[active].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

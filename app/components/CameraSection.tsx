"use client";
import { useState } from "react";
import Image from "next/image";

const zooms = [
  { label: "ƒ/1.48", image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143384/e0cb1acc-b6ee-44c0-8538-fc930ce5d5a5_p84f04.webp" },
  { label: "ƒ/1.8",  image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143406/c7ff1f25-b523-4dd1-8e20-2e4f83d71513_hlejyk.webp" },
  { label: "ƒ/2.8",  image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143408/173456a8-e8d8-4e8b-954d-5a4e48cba4e4_kad1iv.webp" },
  { label: "ƒ/4.0",  image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143403/7e922131-334f-442c-846e-a2c6dcdb2cb8_dwo2so.webp" },
];

const photos = [
  { image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143402/086c194c-e1a8-4fe8-9ec5-a3e0b0014397_m4pi09.webp", label: "عناصر التحكّم الاحترافية" },
  { image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143402/51faf1e3-9fec-47c5-a539-c377b5244223_dr5g9q.webp", label: "الأنماط الفوتوغرافية" },
  { image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143401/20e1ff3a-293f-4c23-81be-3f434c5f000f_xvljfu.webp", label: "تعديل ذكي للصور" },
  { image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143396/bb763a30-1be8-4d35-876f-d0d3a1333553_x4qgst.webp", label: "تتبع ذكي للتركيز" },
  { image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143421/c82a6117-b6d9-4a3f-869a-f3da94d895a5_v7gzg3.webp", label: "زووم بجودة بصرية 8x" },
  { image: "https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143411/3738d37f-8aa3-4b71-b98d-a6a1f1c22bfb_p2dflq.webp", label: "كاميرا واسعة 48MP" },
];

export default function CameraSection() {
  const [zoom, setZoom] = useState(0);

  return (
    <section id="camera" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1.5">نظام الكاميرا</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1.5">العين بصيرة، والإمكانيات كثيرة.</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-lg">نظام كاميرا احترافي بثلاث عدسات 48MP وفتحة عدسة متغيرة.</p>

        {/* Hero image with stats overlay */}
        <div className="relative rounded-3xl overflow-hidden mb-12 min-h-[280px] md:min-h-[420px]">
          <Image src="https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789144420/fc7c6460-6a02-40eb-86ef-3fa23b06c673_1_cqpz4u.webp"
            alt="كاميرا iPhone 18 Pro Max" fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 1140px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-5 right-5 flex gap-3">
            {[{ v: "48MP", l: "ثلاث عدسات" }, { v: "8x", l: "زووم بصري" }].map((s) => (
              <div key={s.v} className="bg-black/60 backdrop-blur-md rounded-2xl px-4 py-3 text-center border border-white/10">
                <p className="text-white text-xl font-black leading-none">{s.v}</p>
                <p className="text-white/60 text-xs mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aperture selector */}
        <div className="mb-12">
          <h3 className="text-xl font-black text-gray-900 mb-4">فتحة عدسة متغيرة — شوف الفرق</h3>
          <div className="flex gap-2 mb-5 flex-wrap">
            {zooms.map((z, i) => (
              <button key={z.label} onClick={() => setZoom(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border-2 transition-all ${zoom === i ? "border-amber-400 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-500 hover:border-gray-400"}`}>
                {z.label}
              </button>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-[380px]">
            <Image key={zooms[zoom].image} src={zooms[zoom].image} alt={zooms[zoom].label}
              fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 1140px" />
          </div>
        </div>

        {/* Photo grid */}
        <h3 className="text-xl font-black text-gray-900 mb-6">تصوير احترافي بإمكانيات استثنائية.</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p) => (
            <div key={p.label} className="relative rounded-2xl overflow-hidden group min-h-[160px] md:min-h-[220px]">
              <Image src={p.image} alt={p.label} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-0 inset-x-0 p-3 text-white text-xs font-bold leading-snug">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

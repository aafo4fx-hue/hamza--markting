import Image from "next/image";

const stats = [
  { value: "45", unit: "ساعة",   label: "تشغيل فيديو" },
  { value: "30", unit: "ساعة",   label: "استخدام بشحنة واحدة" },
  { value: "50%", unit: "شحن",   label: "خلال 15 دقيقة فقط" },
  { value: "7",  unit: "ساعات",  label: "بعد 5 دقائق شحن" },
];

export default function BatterySection() {
  return (
    <section id="battery" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1.5">عمر البطارية</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1.5">البطارية تعيش أفضل أوقاتها.</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-lg">أطول عمر بطارية في iPhone على الإطلاق — 6 ساعات أكثر من iPhone 17 Pro Max.</p>

        {/* Full bleed image with stats */}
        <div className="relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-[500px]">
          <Image src="https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789143433/85d716c4-8b3d-48a7-8add-1a34416d08c9_fp7jmm.webp"
            alt="بطارية iPhone 18 Pro Max" fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 1140px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Stats grid over image */}
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-2xl md:text-3xl font-black text-white">{s.value}</span>
                    <span className="text-xs font-bold text-white/70">{s.unit}</span>
                  </div>
                  <p className="text-white/60 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

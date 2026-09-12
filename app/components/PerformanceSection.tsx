import Image from "next/image";

const chips = [
  { icon: "🧠", name: "ذكاء اصطناعي متقدم",     desc: "محرك عصبي مزدوج 16 نواة — ذاكرة أسرع بـ 50%." },
  { icon: "⚡", name: "بنية فئة M",              desc: "تبديد حرارة أفضل وأداء مستدام أعلى بـ 40%." },
  { icon: "📡", name: "مودم C2 الجديد",          desc: "تحميل أسرع بـ 50% وبطارية أطول." },
  { icon: "🌡️", name: "حجرة بخار 3×",           desc: "مساحة تبريد أكبر بثلاث مرات." },
];

export default function PerformanceSection() {
  return (
    <section id="performance" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1.5">الأداء</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-1.5">أمّ الشرائح.</h2>
        <p className="text-gray-400 text-sm mb-8 max-w-md">A20 Pro — أسرع بـ 40% من iPhone 17 Pro.</p>

        {/* Full bleed image with chips overlay */}
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[560px]">
          <Image
            src="https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789147054/62c2df83-0f67-463c-bef1-745faa4550b6_m7ky0z.webp"
            alt="A20 Pro" fill className="object-cover object-center"
            sizes="(max-width:768px) 100vw, 1140px"
          />
          {/* subtle gradient only at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badge top-right */}
          <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg">
            <p className="text-gray-900 text-base font-black leading-none">A20 Pro</p>
            <p className="text-amber-500 text-[10px] font-bold mt-0.5">أقوى شريحة في iPhone</p>
          </div>

          {/* Chips grid at bottom */}
          <div className="absolute bottom-0 inset-x-0 p-5 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {chips.map((c) => (
                <div key={c.name}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 hover:bg-white/20 transition-colors">
                  <span className="text-xl mb-2 block">{c.icon}</span>
                  <p className="text-white text-xs font-black mb-1 leading-snug">{c.name}</p>
                  <p className="text-white/55 text-[10px] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

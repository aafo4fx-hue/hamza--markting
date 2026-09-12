import { IconWhatsapp, IconShield, IconTruck, IconStar, IconBolt } from "./Icons";

const WHATSAPP = "966590316881";

const benefits = [
  { icon: <IconStar className="w-5 h-5" />,   title: "أولوية الحجز",      desc: "كن من أوائل من يحصلون على الجهاز عند بدء التوفر." },
  { icon: <IconBolt className="w-5 h-5" />,   title: "تقسيط بسعر الكاش", desc: "قسّط جهازك دون زيادة على سعر الكاش." },
  { icon: <IconTruck className="w-5 h-5" />,  title: "توصيل مجاني",       desc: "توصيل سريع خلال 24 ساعة لباب بيتك." },
  { icon: <IconShield className="w-5 h-5" />, title: "ضمان سنتين",        desc: "ضمان رسمي لمدة سنتين كاملتين." },
];

export default function Benefits() {
  const goWhatsapp = () => {
    const msg = encodeURIComponent("مرحباً، أريد الحجز المسبق لـ iPhone 18 Pro Max");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <>
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1.5">لماذا تحجز مسبقًا؟</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-8">مزايا الحجز المسبق</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 text-amber-500 mb-4">
                  {b.icon}
                </span>
                <h3 className="text-sm font-black text-gray-900 mb-1.5">{b.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dyqkhcuxe/image/upload/v1789144346/68a6112d-56da-4755-9a83-006a073eed2d_1_rnhta5.webp"
            alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 text-center md:text-right">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
            جاهز للجيل الجديد؟
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mb-5 max-w-xs sm:max-w-sm md:mx-0 mx-auto leading-relaxed">
            احجز iPhone 18 Pro Max مسبقًا الآن عبر واتساب.
          </p>
          <button onClick={goWhatsapp}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-400/30">
            <IconWhatsapp className="w-4 h-4" />
            احجز عبر واتساب الآن
          </button>
        </div>
      </section>
    </>
  );
}

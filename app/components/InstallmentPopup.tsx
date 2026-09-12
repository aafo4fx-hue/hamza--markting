"use client";
import { X, Banknote, CalendarCheck, BadgeCheck, MessageCircle } from "lucide-react";

export default function InstallmentPopup({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full sm:max-w-sm rounded-3xl px-5 pt-5 pb-6 text-right">

        <div className="flex items-start justify-between mb-4">
          <button onClick={onClose} className="text-gray-300 hover:text-gray-500 transition-colors">
            <X className="w-4 h-4" />
          </button>
          <div className="w-full text-right">
            <p className="text-[10px] text-amber-500 font-bold tracking-widest uppercase mb-0.5">عرض حصري</p>
            <h3 className="text-lg font-black text-gray-900">قسّط بسعر الكاش</h3>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          {[
            { icon: <Banknote className="w-4 h-4" />,      title: "نفس السعر تمامًا",          sub: "لا فوائد ولا رسوم مخفية" },
            { icon: <CalendarCheck className="w-4 h-4" />, title: "حتى 24 شهرًا",               sub: "اختر المدة المناسبة لك" },
            { icon: <BadgeCheck className="w-4 h-4" />,    title: "دفعة أولى 1,000 ريال فقط", sub: "وابدأ باستخدام جهازك فورًا" },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="shrink-0 w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                {icon}
              </span>
              <div>
                <p className="text-xs font-bold text-gray-900">{title}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onConfirm}
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl transition-colors text-xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          احجز عبر واتساب
        </button>
      </div>
    </div>
  );
}

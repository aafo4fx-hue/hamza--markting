"use client";
import { useState } from "react";
import { IconMenu, IconX, IconWhatsapp } from "./Icons";

const WHATSAPP = "966500000000";

export default function Header({ onPreorder }: { onPreorder: () => void }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#showcase", label: "الجهاز" },
    { href: "#camera", label: "الكاميرا" },
    { href: "#performance", label: "الأداء" },
    { href: "#battery", label: "البطارية" },
  ];

  const goWhatsapp = () => {
    const msg = encodeURIComponent("مرحباً، أريد الحجز المسبق لـ iPhone 18 Pro Max");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 font-black text-lg text-gray-900 shrink-0">
          <span className="text-amber-500">◆</span>
          <span>تك ستور</span>
        </a>

        <nav className="hidden md:flex gap-7 mr-auto">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={goWhatsapp}
          className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-400/30"
        >
          <IconWhatsapp className="w-4 h-4" />
          احجز عبر واتساب
        </button>

        <button className="md:hidden mr-auto text-gray-800" onClick={() => setOpen(!open)}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-base font-bold text-gray-700 py-3 border-b border-gray-100">
              {l.label}
            </a>
          ))}
          <button onClick={() => { setOpen(false); goWhatsapp(); }}
            className="mt-3 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-2xl text-base">
            <IconWhatsapp className="w-5 h-5" />
            احجز عبر واتساب
          </button>
        </div>
      )}
    </header>
  );
}

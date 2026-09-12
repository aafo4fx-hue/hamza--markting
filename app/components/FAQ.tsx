"use client";
import { useState } from "react";

const faqs = [
  {
    q: "هل التقسيط بنفس سعر الكاش؟",
    a: "نعم، نقدم التقسيط بنفس سعر الكاش دون أي زيادات، وفقًا لشروط العرض المحددة.",
  },
  {
    q: "ما مدة التقسيط المتاحة؟",
    a: "يمكنك التقسيط حتى 24 شهرًا، مع مرونة في اختيار المدة المناسبة لك.",
  },
  {
    q: "متى يبدأ توفر iPhone 18 Pro Max؟",
    a: "سيتم التواصل معك فور بدء التوفر لتأكيد تفاصيل حجزك.",
  },
  {
    q: "هل يمكنني اختيار اللون والسعة؟",
    a: "بالتأكيد، يمكنك اختيار اللون والسعة المفضلة لك عند إتمام الحجز.",
  },
  {
    q: "كيف يتم تأكيد الحجز؟",
    a: "بعد إرسال بيانات الحجز، سيتواصل معك فريقنا على رقم الجوال المسجل لتأكيد التفاصيل.",
  },
  {
    q: "هل يمكن إلغاء الحجز؟",
    a: "يمكنك التواصل مع فريق الدعم لأي استفسار بشأن الحجز.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="lp-section lp-faq">
      <div className="lp-section-inner">
        <p className="lp-eyebrow">الأسئلة الشائعة</p>
        <h2 className="lp-section-title">كل ما تريد معرفته</h2>
        <div className="lp-faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`lp-faq-item${open === i ? " lp-faq-item--open" : ""}`}>
              <button className="lp-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="lp-faq-arrow">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="lp-faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

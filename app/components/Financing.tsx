import { NormalizedProduct } from "../data/product";

const cards = [
  { title: "بسعر الكاش",        sub: "لا تدفع أكثر بسبب التقسيط",                icon: "◈" },
  { title: "حتى 24 شهرًا",      sub: "اختر مدة السداد المناسبة لك",              icon: "◷" },
  { title: "بدون رسوم مخفية",   sub: "كل التفاصيل واضحة قبل تأكيد الحجز",       icon: "◎" },
];

export default function Financing({ product }: { product: NormalizedProduct }) {
  return (
    <section id="financing" className="lp-section lp-financing">
      <div className="lp-section-inner">
        <p className="lp-eyebrow">عرض التقسيط</p>
        <h2 className="lp-section-title">امتلكه الآن، وقسّطه براحتك</h2>
        <p className="lp-section-sub">
          استمتع بـ {product.name} الآن، مع إمكانية التقسيط بنفس سعر الكاش وبدون زيادات مخفية، وفقًا لشروط العرض.
        </p>

        <div className="lp-cards-row">
          {cards.map((c) => (
            <div key={c.title} className="lp-fin-card">
              <span className="lp-fin-icon">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.sub}</p>
            </div>
          ))}
        </div>

        <p className="lp-down-payment">
          دفعة أولى تبدأ من{" "}
          <strong>{product.downPaymentFrom.toLocaleString("ar-SA")} ريال</strong>
        </p>
      </div>
    </section>
  );
}

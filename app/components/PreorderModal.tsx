"use client";
import { useState } from "react";
import { NormalizedProduct } from "../data/product";

type Step = "form" | "summary" | "success";

type FormData = {
  fullName: string;
  phone: string;
  city: string;
  color: string;
  storage: string;
  paymentMethod: "cash" | "installment" | "";
  installmentMonths: string;
};

const CITIES = ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر", "أبها", "تبوك", "القصيم", "حائل"];

export default function PreorderModal({ product, onClose }: { product: NormalizedProduct; onClose: () => void }) {
  const [step, setStep]       = useState<Step>("form");
  const [error, setError] = useState("");
  const [form, setForm]       = useState<FormData>({
    fullName: "", phone: "", city: "", color: product.colors[0].name,
    storage: product.storage[0].label, paymentMethod: "", installmentMonths: "12",
  });

  const set = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const validate = () => {
    if (!form.fullName.trim()) return "يرجى إدخال الاسم الكامل";
    if (!/^05\d{8}$/.test(form.phone)) return "يرجى إدخال رقم جوال سعودي صحيح";
    if (!form.city) return "يرجى اختيار المدينة";
    if (!form.paymentMethod) return "يرجى اختيار طريقة الدفع";
    return "";
  };

  const handleSubmit = () => {
    const paymentLabel = form.paymentMethod === "cash" ? "كاش" : `تقسيط ${form.installmentMonths} شهرًا`;
    const msg = [
      `📱 طلب حجز مسبق - iPhone 18 Pro Max`,
      `👤 الاسم: ${form.fullName}`,
      `📞 الجوال: ${form.phone}`,
      `🏙️ المدينة: ${form.city}`,
      `🎨 اللون: ${form.color}`,
      `💾 السعة: ${form.storage}`,
      `💰 السعر: ${price} ريال`,
      `💳 الدفع: ${paymentLabel}`,
    ].join("\n");
    window.open(`https://wa.me/201552456445?text=${encodeURIComponent(msg)}`, "_blank");
    setStep("success");
  };

  const selectedStorage = product.storage.find((s) => s.label === form.storage);
  const price = selectedStorage ? (selectedStorage.salePrice ?? selectedStorage.price).toLocaleString("ar-SA") : "";

  return (
    <div className="lp-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lp-modal">
        <button className="lp-modal-close" onClick={onClose} aria-label="إغلاق">×</button>

        {step === "form" && (
          <>
            <h2 className="lp-modal-title">احجز مسبقًا</h2>
            <p className="lp-modal-sub">iPhone 18 Pro Max</p>

            <div className="lp-form">
              <div className="lp-field">
                <label>الاسم الكامل</label>
                <input value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="محمد عبدالله" />
              </div>
              <div className="lp-field">
                <label>رقم الجوال</label>
                <input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="05XXXXXXXX" dir="ltr" />
              </div>
              <div className="lp-field">
                <label>المدينة</label>
                <select value={form.city} onChange={(e) => set("city", e.target.value)}>
                  <option value="">اختر مدينتك</option>
                  {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="lp-field">
                <label>اللون</label>
                <select value={form.color} onChange={(e) => set("color", e.target.value)}>
                  {product.colors.map((c) => <option key={c.code} value={c.name}>{c.nameAr}</option>)}
                </select>
              </div>
              <div className="lp-field">
                <label>السعة</label>
                <div className="lp-storage-btns">
                  {product.storage.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      className={`lp-storage-btn${form.storage === s.label ? " lp-storage-btn--active" : ""}`}
                      onClick={() => set("storage", s.label)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="lp-field">
                <label>طريقة الدفع</label>
                <div className="lp-payment-btns">
                  <button
                    type="button"
                    className={`lp-payment-btn${form.paymentMethod === "cash" ? " lp-payment-btn--active" : ""}`}
                    onClick={() => set("paymentMethod", "cash")}
                  >كاش</button>
                  <button
                    type="button"
                    className={`lp-payment-btn${form.paymentMethod === "installment" ? " lp-payment-btn--active" : ""}`}
                    onClick={() => set("paymentMethod", "installment")}
                  >تقسيط</button>
                </div>
              </div>
              {form.paymentMethod === "installment" && (
                <div className="lp-field">
                  <label>مدة التقسيط</label>
                  <select value={form.installmentMonths} onChange={(e) => set("installmentMonths", e.target.value)}>
                    {[6, 12, 18, 24].map((m) => (
                      <option key={m} value={m}>{m} شهرًا</option>
                    ))}
                  </select>
                </div>
              )}

              {error && <p className="lp-form-error">{error}</p>}

              <button
                className="lp-btn-gold lp-btn-lg lp-btn-full"
                onClick={() => { const e = validate(); if (e) { setError(e); return; } setStep("summary"); }}
              >
                مراجعة الحجز
              </button>
            </div>
          </>
        )}

        {step === "summary" && (
          <>
            <h2 className="lp-modal-title">مراجعة الحجز</h2>
            <div className="lp-summary">
              <div className="lp-summary-row"><span>الجهاز</span><strong>iPhone 18 Pro Max</strong></div>
              <div className="lp-summary-row"><span>اللون</span><strong>{form.color}</strong></div>
              <div className="lp-summary-row"><span>السعة</span><strong>{form.storage}</strong></div>
              <div className="lp-summary-row"><span>السعر</span><strong>{price} ريال</strong></div>
              <div className="lp-summary-row"><span>طريقة الدفع</span><strong>{form.paymentMethod === "cash" ? "كاش" : "تقسيط"}</strong></div>
              {form.paymentMethod === "installment" && (
                <div className="lp-summary-row"><span>مدة التقسيط</span><strong>{form.installmentMonths} شهرًا</strong></div>
              )}
              <div className="lp-summary-row"><span>الاسم</span><strong>{form.fullName}</strong></div>
              <div className="lp-summary-row"><span>الجوال</span><strong dir="ltr">{form.phone}</strong></div>
              <div className="lp-summary-row"><span>المدينة</span><strong>{form.city}</strong></div>
            </div>
            {error && <p className="lp-form-error">{error}</p>}
            <div className="lp-summary-actions">
              <button className="lp-btn-outline lp-btn-lg" onClick={() => setStep("form")}>تعديل</button>
              <button className="lp-btn-gold lp-btn-lg" onClick={handleSubmit}>
                تأكيد الحجز
              </button>
            </div>
          </>
        )}

        {step === "success" && (
          <div className="lp-success">
            <div className="lp-success-icon">✓</div>
            <h2>تم استلام حجزك بنجاح</h2>
            <p>سيتم التواصل معك لتأكيد تفاصيل الحجز والتوفر.</p>
            <button className="lp-btn-gold lp-btn-lg" onClick={onClose}>إغلاق</button>
          </div>
        )}
      </div>
    </div>
  );
}

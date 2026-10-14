"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpLeft, ArrowLeft, Check, ShieldCheck, Truck, CreditCard, MessageCircle, Menu, X, ChevronDown, Sparkles, Headphones, BadgeCheck } from "lucide-react";
import { IconWhatsapp } from "./components/Icons";
import { PRODUCT } from "./data/product";
const links = [{href:"#device",label:"اكتشف الآيفون"},{href:"#choose",label:"اختر جهازك"},{href:"#installments",label:"التقسيط"},{href:"#faq",label:"الأسئلة الشائعة"}];
const faqs = [
["كيف أطلب جهازي من لمسة؟","اختر اللون والسعة اللي تناسبك، واضغط «اطلب الآن». بنفتح لك واتساب بتفاصيل اختيارك، وفريق لمسة يكمل معك الطلب ويأكد لك التوفر وموعد التوصيل."],
["أقدر أقسّط بنفس سعر الكاش؟","إيه، تقدر تختار التقسيط حتى 24 شهر، بدفعة أولى تبدأ من 1,000 ريال، حسب شروط العرض والأهلية. فريقنا يوضح لك قيمة الأقساط وجميع التفاصيل قبل تأكيد طلبك."],
["هل التوصيل مجاني لكل مناطق المملكة؟","التوصيل مجاني داخل المملكة. نتأكد معك من العنوان ونعطيك موعد التوصيل المتوقع حسب مدينتك وتوفر الجهاز."],
["وش يشمل الضمان؟","الجهاز بضمان سنتين حسب شروط الضمان. تواصل معنا على واتساب عشان نوضح لك التغطية وإجراءات خدمة ما بعد البيع."]];
function Logo(){return <a href="#" className="brand brand-original" aria-label="لمسة — الرئيسية"><Image className="brand-image" src="/og-image.png" alt="لمسة — أجهزة. لمسة. تفرق." width={512} height={512} sizes="(max-width: 760px) 66px, 76px" /></a>}
export default function LandingPage(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [colorIndex,setColorIndex]=useState(0);
 const [storageIndex,setStorageIndex]=useState(0);
 const [imageIndex,setImageIndex]=useState(0);
 const color=PRODUCT.colors[colorIndex], storage=PRODUCT.storage[storageIndex], price=storage.salePrice??storage.price;
 const orderUrl=`https://wa.me/966590316881?text=${encodeURIComponent(`هلا لمسة، ودي أطلب iPhone 18 Pro Max\nاللون: ${color.nameAr}\nالسعة: ${storage.label}\nالسعر: ${price.toLocaleString("en-US")} ريال\nياليت توضحون لي التوفر وخيارات الدفع والتوصيل.`)}`;
 const order=(className="button button-gold")=><a className={className} href={orderUrl} target="_blank" rel="noopener noreferrer">اطلب الآن<ArrowUpLeft size={18}/></a>;
 return <>
 <div className="announcement"><Sparkles size={14}/><span>الآيفون اللي بخاطرك، بقسط على راحتك.</span><span className="announcement-divider">|</span><strong>نفس سعر الكاش</strong><ArrowLeft size={14}/></div>
 <header className="site-header"><div className="container header-inner"><Logo/><nav className="desktop-nav" aria-label="القائمة الرئيسية">{links.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</nav><div className="header-actions">{order()}<button className="menu-toggle" aria-label={menuOpen?"إغلاق القائمة":"فتح القائمة"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div></div>{menuOpen&&<nav id="mobile-nav" className="mobile-nav" aria-label="قائمة الجوال">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setMenuOpen(false)}>{l.label}<ArrowUpLeft size={16}/></a>)}</nav>}</header>
 <main id="main-content">
 <section className="hero" id="device"><div className="container hero-grid"><div className="hero-copy"><span className="eyebrow"><span className="gold-line"/>جيل جديد. لمسة مختلفة.</span><p className="hero-model" dir="ltr">iPhone 18 Pro Max</p><h1>كل اللي تبيه.<br/><span>بلمسة تفرق.</span></h1><p className="hero-description">فخامة تلفت النظر، وتجربة تليق فيك.<br/>خذ الآيفون اللي بخاطرك، وقسّطه <strong>بنفس سعر الكاش.</strong></p><div className="hero-buttons">{order("button button-gold button-large")}<a href="#choose" className="button button-outline button-large">اكتشف جهازك<ArrowLeft size={18}/></a></div><div className="hero-assurance">{["بدون رسوم مخفية","ضمان سنتين","توصيل مجاني"].map(t=><span key={t}><Check size={15}/>{t}</span>)}</div><div className="hero-bottom"><span className="mini-icon"><CreditCard size={21}/></span><p>دفعة أولى تبدأ من <strong>1,000 ريال</strong><small>والباقي أقساط على راحتك، حتى 24 شهر</small></p></div></div><div className="hero-art"><span className="art-word" aria-hidden="true">PRO MAX</span><div className="hero-image-wrap"><Image src={PRODUCT.colors[0].images[0]} alt="آيفون 18 برو ماكس باللون البرجاندي" fill sizes="(max-width: 760px) 100vw, 55vw" preload className="hero-product"/></div><div className="art-label"><span className="art-dot"/>مصمم عشان يتميّز.</div><div className="floating-finance"><span className="finance-icon"><CreditCard size={22}/></span><div><small>قسّطها مع لمسة</small><strong>بسعر الكاش.</strong></div><BadgeCheck size={22}/></div><div className="art-caption"><span>01 / 04</span><span className="caption-line"/><span>البرجاندي · فخامة التفاصيل</span></div></div></div></section>
 <div className="trust-strip"><div className="container trust-grid">{[{icon:ShieldCheck,title:"أصلي ويستاهل ثقتك",text:"ضمان لمدة سنتين"},{icon:Truck,title:"لين باب بيتك",text:"توصيل مجاني داخل المملكة"},{icon:CreditCard,title:"قسّط على راحتك",text:"حتى 24 شهر بسعر الكاش"},{icon:Headphones,title:"حاضرين لك",text:"مساعدة قبل وبعد الطلب"}].map(({icon:Icon,title,text})=><div className="trust-item" key={title}><Icon size={25}/><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></div>
 <section className="section container" id="choose"><div className="section-heading"><div><span className="eyebrow">على ذوقك، بالضبط</span><h2>آيفونك. <span>اختيارك.</span></h2></div><p>لون يشبهك، وسعة تكفي كل تفاصيلك.<br/>اختر اللي يناسبك وخلّ الباقي علينا.</p></div><div className="product-grid"><div className="product-gallery"><div className="gallery-main"><span className="gallery-tag">تعرّف على جهازك</span><Image src={color.images[imageIndex]} alt={`آيفون 18 برو ماكس — ${color.nameAr} — صورة ${imageIndex+1}`} fill sizes="(max-width: 760px) 90vw, 45vw" className="gallery-image"/><span className="gallery-name" dir="ltr">{color.name.toUpperCase()}</span></div><div className="thumbnails">{color.images.map((src,i)=><button key={src} aria-label={`عرض صورة ${i+1}`} aria-pressed={imageIndex===i} className={imageIndex===i?"thumbnail active":"thumbnail"} onClick={()=>setImageIndex(i)}><Image src={src} alt="" width={64} height={64}/></button>)}</div></div><div className="product-options"><span className="product-category">APPLE · IPHONE</span><h3 dir="ltr">iPhone 18 Pro Max</h3><p className="product-subtitle">تجربة استثنائية. من أول لمسة.</p><div className="option-block"><div className="option-title">اختر اللون <span>{color.nameAr}</span></div><div className="color-options">{PRODUCT.colors.map((c,i)=><button key={c.name} className={colorIndex===i?"color-option selected":"color-option"} aria-label={c.nameAr} aria-pressed={colorIndex===i} onClick={()=>{setColorIndex(i);setImageIndex(0)}}><span style={{background:c.code}}/>{colorIndex===i&&<Check size={14}/>}</button>)}</div></div><div className="option-block"><div className="option-title">كم تحتاج مساحة؟ <span>السعة التخزينية</span></div><div className="storage-options" dir="ltr">{PRODUCT.storage.map((s,i)=><button key={s.label} aria-pressed={storageIndex===i} className={storageIndex===i?"storage-option selected":"storage-option"} onClick={()=>setStorageIndex(i)}>{s.label}</button>)}</div></div><div className="price-panel"><div><span>سعر جهازك</span><strong><b dir="ltr">{price.toLocaleString("en-US")}</b> <small>ريال</small></strong><small>شامل ضريبة القيمة المضافة</small></div><div className="price-financing"><CreditCard size={19}/><strong>كاش أو أقساط</strong><span>نفس السعر، براحتك</span></div></div>{order("button button-gold order-full")}<p className="order-note"><MessageCircle size={14}/>نكمل معك الطلب على واتساب ونتأكد من التوفر</p><div className="product-promises"><span><ShieldCheck size={15}/>ضمان سنتين</span><span><Truck size={15}/>توصيل مجاني</span></div></div></div></section>
 <section className="feature-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">التفاصيل تصنع الفرق</span><h2>مو بس جهاز.<br/><span>تجربة على مستوى ثاني.</span></h2></div><p>من أول نظرة، لين آخر تفصيلة.<br/>آيفون يواكب يومك ويكمّل أسلوبك.</p></div><div className="feature-grid">{[{src:PRODUCT.colors[0].images[1],title:"فخامة، ما تحتاج كلام.",tag:"تصميم يعبّر عنك",text:"حضور مختلف وألوان تختار منها اللي يشبهك."},{src:PRODUCT.colors[2].images[1],title:"خلّ ذكرياتك أقرب.",tag:"لكل لحظة حكاية",text:"كل تفاصيل يومك، تستاهل تحتفظ فيها."}].map((f,i)=><article className="feature-card" key={f.title}><Image src={f.src} alt={f.tag} fill sizes="(max-width: 760px) 90vw, 50vw"/><div className="feature-overlay"/><div className="feature-copy"><span>{f.tag}</span><h3>{f.title}</h3><p>{f.text}</p></div><span className="feature-number">0{i+1}</span></article>)}</div></div></section>
 <section className="financing-simple container" id="installments" aria-labelledby="finance-title">
  <div className="financing-simple-inner">
   <div className="financing-simple-copy">
    <span className="eyebrow">خاطرك فيه؟ سهّلناها عليك.</span>
    <h2 id="finance-title">خذه اليوم. <span>وقسّطه على راحتك.</span></h2>
    <p>نفس سعر الكاش، بأقساط تناسبك وبدون رسوم مخفية.</p>
   </div>
   <div className="financing-simple-bottom">
    <div className="financing-facts"><div><span>مدة التقسيط تصل إلى</span><strong>24 <small>شهر</small></strong></div><div><span>دفعة أولى تبدأ من</span><strong>1,000 <small>ريال</small></strong></div></div>
    {order("button button-gold")}
   </div>
   <p className="financing-simple-note">التقسيط حسب شروط العرض والأهلية. نوضّح لك جميع التفاصيل قبل تأكيد الطلب.</p>
  </div>
 </section>
 <section className="faq-section" id="faq"><div className="container faq-grid"><div><span className="eyebrow">كل شيء واضح</span><h2>بخاطرك سؤال؟<br/><span>جوابه عندنا.</span></h2><p>وإذا عندك أي استفسار ثاني،<br/>فريق لمسة حاضر لك.</p><a className="text-link" href={orderUrl} target="_blank" rel="noopener noreferrer">كلّمنا على واتساب<ArrowUpLeft size={17}/></a></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></section>
 <section className="final-cta container"><span className="eyebrow">اختيارك الحلو يبدأ هنا</span><h2>جاهز للمسة الجديدة؟</h2><p>آيفونك اللي بخاطرك، صار أقرب لك.</p>{order("button button-gold button-large")}</section>
 </main>
 <footer className="footer-simple">
  <div className="container">
   <div className="footer-simple-top">
    <p>اختيارات تليق فيك، <span>وخدمة تستاهل ثقتك.</span></p>
    <nav aria-label="روابط الفوتر">{links.map(l=><a href={l.href} key={l.href}>{l.label}</a>)}</nav>
    <a className="footer-simple-contact" href="https://wa.me/966590316881" target="_blank" rel="noopener noreferrer"><IconWhatsapp className="footer-whatsapp-icon"/><span>حاضرين لك على واتساب</span><ArrowUpLeft size={16}/></a>
   </div>
   <div className="footer-simple-bottom"><p>© {new Date().getFullYear()} لمسة. جميع الحقوق محفوظة.</p><a href="tel:+966590316881" dir="ltr">+966 59 031 6881</a><a href="#">العودة للأعلى ↑</a></div>
  </div>
 </footer>
 <a className="whatsapp-float" href={orderUrl} target="_blank" rel="noopener noreferrer" aria-label="اطلب الآن عبر واتساب"><IconWhatsapp className="whatsapp-float-icon"/></a>
 </>;
}

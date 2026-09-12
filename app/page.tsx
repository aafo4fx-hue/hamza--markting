"use client";
import Header          from "./components/Header";
import Hero            from "./components/Hero";
import Showcase        from "./components/Showcase";
import DesignSection   from "./components/DesignSection";
import CameraSection   from "./components/CameraSection";
import Benefits        from "./components/Benefits";
import Footer          from "./components/Footer";
import { PRODUCT }     from "./data/product";

const WHATSAPP = "966500000000";

export default function LandingPage() {
  const goWhatsapp = () => {
    const msg = encodeURIComponent("مرحباً، أريد الحجز المسبق لـ iPhone 18 Pro Max");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <>
      <Header onPreorder={goWhatsapp} />
      <main>
        <Hero             product={PRODUCT} />
        <Showcase         product={PRODUCT} />
        <DesignSection />
        <CameraSection />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

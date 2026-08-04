import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { ShopProvider } from './context/ShopContext';
import { PageLoader } from './components/Common/PageLoader';
import { CursorGlow } from './components/Common/CursorGlow';
import { ScrollProgress } from './components/Common/ScrollProgress';
import { Toast } from './components/Common/Toast';
import { WhatsAppFloat } from './components/Common/WhatsAppFloat';
import { BackToTop } from './components/Common/BackToTop';
import { StickyMobileNav } from './components/Common/StickyMobileNav';
import { Navbar } from './components/Header/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { OffersRibbon } from './components/Offers/OffersRibbon';
import { PricingSection } from './components/Pricing/PricingSection';
import { ProductGrid } from './components/Catalog/ProductGrid';
import { QuickViewModal } from './components/Catalog/QuickViewModal';
import { SizeSection, SizeChartModal } from './components/SizeGuide/SizeSection';
import { WhyChooseUs } from './components/Features/WhyChooseUs';
import { ReviewsSection } from './components/Features/ReviewsSection';
import { FAQSection } from './components/Features/FAQSection';
import { CartDrawer } from './components/Cart/CartDrawer';
import { CheckoutModal } from './components/Cart/CheckoutModal';
import { Footer } from './components/Footer/Footer';

export const AppContent = () => {
  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smoothWave: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <Toast />

      <Navbar />

      <main>
        <HeroSection />
        <OffersRibbon />
        <PricingSection />
        <ProductGrid />
        <SizeSection />
        <WhyChooseUs />
        <ReviewsSection />
        <FAQSection />
      </main>

      <Footer />

      <QuickViewModal />
      <SizeChartModal />
      <CartDrawer />
      <CheckoutModal />

      <WhatsAppFloat />
      <StickyMobileNav />
      <BackToTop />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}

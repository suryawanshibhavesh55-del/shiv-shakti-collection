import React from 'react';
import { ShoppingBag, MessageCircle, ChevronDown, Sparkles, ShieldCheck, Truck, Star } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/919352697128?text=" + encodeURIComponent(
    "Hello SHIV SHAKTI COLLECTION, I want to order lehengas from your website."
  );

  // Hero model images from assets
  const heroModel1 = PRODUCTS[0]?.image || '/assets/WhatsApp Image 2026-08-04 at 8.10.02 PM.jpeg';
  const heroModel2 = PRODUCTS[1]?.image || '/assets/WhatsApp Image 2026-08-04 at 8.10.03 PM (1).jpeg';

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1A010B 0%, #4A001E 50%, #16020A 100%)',
        color: '#FDFBF7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Gold Ornaments & Ambient Light */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(106, 13, 37, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          {/* Hero Content Left */}
          <div
            style={{
              gridColumn: 'span 12',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            className="lg:col-span-7"
          >
            {/* Top Tagline Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '30px',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                color: '#FFF3A8',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '24px',
                width: 'fit-content'
              }}
            >
              <Sparkles size={16} style={{ color: '#D4AF37' }} />
              <span>UDAIPUR'S PREMIER LUXURY LEHENGA DESTINATION</span>
            </div>

            {/* Main Hero Headline */}
            <h1
              className="font-serif animate-fade-up"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '20px',
                color: '#FDFBF7'
              }}
            >
              Shiv Shakti Lehenga <br />
              <span className="text-gold-gradient">Collection</span>
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontFamily: 'var(--font-accent)',
                color: '#FFF3A8',
                letterSpacing: '1px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap'
              }}
            >
              <span>Stylish</span>
              <span style={{ color: '#D4AF37' }}>✦</span>
              <span>Premium Quality</span>
              <span style={{ color: '#D4AF37' }}>✦</span>
              <span>Affordable Prices</span>
              <span style={{ color: '#D4AF37' }}>✦</span>
              <span>Weddings & Celebrations</span>
            </p>

            <p
              style={{
                color: 'rgba(253, 251, 247, 0.85)',
                fontSize: '1rem',
                lineHeight: 1.6,
                maxWidth: '600px',
                marginBottom: '36px'
              }}
            >
              Discover beautiful, handcrafted lehengas at SHIV SHAKTI COLLECTION. Premium quality lehengas at affordable prices for weddings, festive occasions, and celebrations. Tailored for sizes XS to 8XL. High quality guaranteed.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                flexWrap: 'wrap',
                marginBottom: '40px'
              }}
            >
              <button
                onClick={() => scrollTo('collections')}
                className="btn-gold"
                style={{ fontSize: '1.05rem', padding: '16px 36px' }}
              >
                <ShoppingBag size={20} />
                <span>Shop Collection</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-maroon"
                style={{ fontSize: '1.05rem', padding: '16px 32px' }}
              >
                <MessageCircle size={20} style={{ color: '#25D366' }} />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Quick Micro Trust Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#D4AF37' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" />
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#FFF3A8', fontWeight: 600, marginTop: '4px' }}>
                  10,000+ Happy Customers
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D4AF37' }}>
                  <ShieldCheck size={20} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>100% Guaranteed</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(253, 251, 247, 0.7)', marginTop: '4px' }}>
                  Premium Soft Fabrics
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D4AF37' }}>
                  <Truck size={20} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>All India Shipping</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(253, 251, 247, 0.7)', marginTop: '4px' }}>
                  Fast Express Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Hero Showcase Images Right */}
          <div
            style={{
              gridColumn: 'span 12',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}
            className="lg:col-span-5"
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '3/4',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.3)',
                border: '2px solid rgba(212, 175, 55, 0.4)'
              }}
            >
              <img
                src={heroModel1}
                alt="Shiv Shakti Collection Premium Royal Lehenga Model"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(26, 1, 11, 0.85) 0%, transparent 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  padding: '16px',
                  background: 'rgba(74, 0, 30, 0.85)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div className="badge-popular">SPECIAL OFFER</div>
                  <div className="font-serif" style={{ fontSize: '1.1rem', color: '#FDFBF7', fontWeight: 600, marginTop: '6px' }}>
                    Shiv Shakti Royal Velvet Lehenga
                  </div>
                  <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1rem' }}>
                    ₹1500 <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>₹3999</span>
                    <span style={{ marginLeft: '8px', color: '#FFF3A8', fontSize: '0.75rem' }}>Buy 2 for ₹2000!</span>
                  </div>
                </div>
                <button
                  onClick={() => scrollTo('collections')}
                  style={{
                    background: '#D4AF37',
                    color: '#100006',
                    border: 'none',
                    borderRadius: '50%',
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  →
                </button>
              </div>
            </div>

            {/* Secondary Floating Card */}
            <div
              className="hidden sm:block animate-float"
              style={{
                position: 'absolute',
                top: '40px',
                left: '-30px',
                width: '180px',
                aspectRatio: '3/4',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
                border: '2px solid rgba(212, 175, 55, 0.5)'
              }}
            >
              <img
                src={heroModel2}
                alt="Featured Lehenga"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          onClick={() => scrollTo('offers-ribbon')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginTop: '50px',
            cursor: 'pointer',
            color: '#D4AF37',
            opacity: 0.85
          }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            SCROLL TO EXPLORE
          </span>
          <ChevronDown size={22} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

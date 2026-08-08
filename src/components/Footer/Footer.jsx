import React from 'react';
import { Crown, Phone, MapPin, Instagram, Clock, Mail, ShieldCheck, Truck, Award, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/919352697128?text=" + encodeURIComponent(
    "Hello SHIV SHAKTI COLLECTION, I want to inquire about ordering lehengas."
  );

  return (
    <footer
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #1A010B 0%, #100006 100%)',
        color: '#FDFBF7',
        borderTop: '2px solid rgba(212, 175, 55, 0.4)',
        paddingTop: '80px',
        paddingBottom: '100px',
        position: 'relative'
      }}
    >
      {/* Floating Trust Badges Bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 60px auto',
          padding: '0 24px'
        }}
      >
        <div
          style={{
            background: 'rgba(74, 0, 30, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '24px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Award size={32} style={{ color: '#D4AF37' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF3A8' }}>100% Premium Quality</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(253, 251, 247, 0.7)' }}>Grade-A Soft Ethnic Fabric</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Truck size={32} style={{ color: '#D4AF37' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF3A8' }}>All India Delivery</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(253, 251, 247, 0.7)' }}>Fast Express Shipping</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <ShieldCheck size={32} style={{ color: '#D4AF37' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF3A8' }}>Secure Ordering</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(253, 251, 247, 0.7)' }}>Direct Verified WhatsApp Orders</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '40px'
        }}
      >
        {/* Brand Column */}
        <div style={{ gridColumn: 'span 12' }} className="lg:col-span-4">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#100006'
              }}
            >
              <Crown size={24} />
            </div>
            <div>
              <span className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '2px', display: 'block' }}>
                SHIV SHAKTI
              </span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '3px', color: '#FDFBF7', opacity: 0.8, textTransform: 'uppercase' }}>
                COLLECTION
              </span>
            </div>
          </div>

          <p style={{ color: 'rgba(253, 251, 247, 0.75)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Udaipur's trusted lehenga destination offering stylish, premium-quality lehengas at affordable prices for weddings, festive occasions, and celebrations. Inclusive sizes from XS to 8XL.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="https://instagram.com/shivshakticollection"
              target="_blank"
              rel="noopener noreferrer"
              style={socialBtnStyle}
              title="Instagram @shivshakticollection"
            >
              <Instagram size={20} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...socialBtnStyle, color: '#25D366' }}
              title="WhatsApp 9352697128"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ gridColumn: 'span 12' }} className="sm:col-span-6 lg:col-span-3">
          <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#FFF3A8', fontWeight: 700, marginBottom: '20px' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={footerLinkStyle}>Home</button></li>
            <li><button onClick={() => scrollTo('collections')} style={footerLinkStyle}>Lehengas Catalog</button></li>
            <li><button onClick={() => scrollTo('bestsellers')} style={footerLinkStyle}>Best Sellers</button></li>
            <li><button onClick={() => scrollTo('pricing')} style={footerLinkStyle}>Offers & Bundles</button></li>
            <li><button onClick={() => scrollTo('sizes')} style={footerLinkStyle}>Sizes XS to 8XL</button></li>
            <li><button onClick={() => scrollTo('why-choose-us')} style={footerLinkStyle}>Why Choose Us</button></li>
            <li><button onClick={() => scrollTo('reviews')} style={footerLinkStyle}>Customer Reviews</button></li>
            <li><button onClick={() => scrollTo('faq')} style={footerLinkStyle}>FAQ</button></li>
          </ul>
        </div>

        {/* Store Address & Contact */}
        <div style={{ gridColumn: 'span 12' }} className="sm:col-span-6 lg:col-span-5">
          <h4 className="font-serif" style={{ fontSize: '1.25rem', color: '#FFF3A8', fontWeight: 700, marginBottom: '20px' }}>
            Store Location & Contact
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem', color: 'rgba(253, 251, 247, 0.85)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <MapPin size={20} style={{ color: '#D4AF37', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#FDFBF7', display: 'block' }}>Store Address:</strong>
                शिव शक्ति कलेक्शन, चमनपुरा, उदयपुर, राजस्थान 313004
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Phone size={20} style={{ color: '#25D366', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#FDFBF7' }}>Phone / WhatsApp: </strong>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 700, textDecoration: 'none' }}>
                  9352697128
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Instagram size={20} style={{ color: '#E1306C', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#FDFBF7' }}>Instagram: </strong>
                <a href="https://instagram.com/shivshakticollection" target="_blank" rel="noopener noreferrer" style={{ color: '#FFF3A8', textDecoration: 'none' }}>
                  @shivshakticollection
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Clock size={20} style={{ color: '#D4AF37', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#FDFBF7' }}>Business Hours: </strong>
                10:00 AM to 8:30 PM (Open All 7 Days)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer Line */}
      <div
        style={{
          maxWidth: '1300px',
          margin: '60px auto 0 auto',
          padding: '24px 24px 0 24px',
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: 'rgba(253, 251, 247, 0.6)'
        }}
      >
        <div>
          © {new Date().getFullYear()} <strong>SHIV SHAKTI COLLECTION</strong>. All Rights Reserved. Premium Lehenga Collection.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Crafted with <Heart size={14} fill="#6A0D25" color="#6A0D25" /> for Indian Fashion Lovers
        </div>
      </div>
    </footer>
  );
};

const socialBtnStyle = {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  background: 'rgba(212, 175, 55, 0.12)',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  color: '#D4AF37',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.2s ease'
};

const footerLinkStyle = {
  background: 'none',
  border: 'none',
  color: 'rgba(253, 251, 247, 0.8)',
  fontSize: '0.9rem',
  cursor: 'pointer',
  padding: 0,
  transition: 'color 0.2s ease'
};

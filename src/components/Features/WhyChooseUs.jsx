import React from 'react';
import { Award, Sparkles, Tag, Feather, Scissors, Users, Zap, Truck } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={28} />,
      title: "Premium Quality",
      desc: "Grade-A pure Chanderi silk, Banarasi zari & high-density velvet fabrics crafted to last years."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Latest Designs",
      desc: "Direct from artisan workshops with weekly trending Sabyasachi & Kalki wedding patterns."
    },
    {
      icon: <Tag size={28} />,
      title: "Affordable Prices",
      desc: "Every dress at ₹1500 with exclusive Buy Any 2 Dresses for ₹2000 special offer savings."
    },
    {
      icon: <Feather size={28} />,
      title: "Soft & Comfortable",
      desc: "Skin-friendly, breathable, non-itchy linings tailored for all-day comfort during celebrations."
    },
    {
      icon: <Scissors size={28} />,
      title: "Perfect Fit",
      desc: "Expert Indian sizing from XS to 8XL with internal 2-inch side alteration margins."
    },
    {
      icon: <Users size={28} />,
      title: "Trusted Customers",
      desc: "Over 10,000+ satisfied customers across India with 4.9/5 star ratings."
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Delivery",
      desc: "Quick 24-hour dispatch with express tracking details delivered straight to your WhatsApp."
    },
    {
      icon: <Truck size={28} />,
      title: "All India Shipping",
      desc: "Free courier delivery to all 28 states, union territories & 19,000+ pincodes."
    }
  ];

  return (
    <section
      id="why-choose-us"
      style={{
        padding: '90px 24px',
        background: 'linear-gradient(180deg, #1A010B 0%, #300013 100%)',
        color: '#FDFBF7',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#D4AF37',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            THE SHIV SHAKTI PROMISE
          </div>

          <h2
            className="font-serif text-gold-gradient"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, marginBottom: '16px' }}
          >
            Why Choose SHIV SHAKTI COLLECTION
          </h2>

          <p style={{ color: 'rgba(253, 251, 247, 0.8)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            We bring luxury boutique quality lehengas straight from Udaipur, Rajasthan to your doorstep at affordable prices.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className="product-card"
              style={{
                background: 'rgba(74, 0, 30, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)',
                  color: '#100006',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }}
              >
                {item.icon}
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FDFBF7' }}>
                {item.title}
              </h3>

              <p style={{ color: 'rgba(253, 251, 247, 0.75)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Sparkles, Flame, Crown, ShoppingBag } from 'lucide-react';

export const PricingSection = () => {
  const { addToCart, products, setIsCartOpen } = useShop();

  const pricingTiers = [
    {
      qty: 1,
      title: "1 Dress",
      price: 1500,
      perDress: 1500,
      popular: false,
      badge: "Single Edition",
      savings: "Original Price ₹3999"
    },
    {
      qty: 2,
      title: "2 Dresses",
      price: 2000,
      perDress: 1000,
      popular: true,
      badge: "🔥 BUY 2 FOR ₹2000 OFFER",
      savings: "Save ₹1000 (₹1000/pc)"
    },
    {
      qty: 3,
      title: "3 Dresses",
      price: 3500,
      perDress: 1166,
      popular: false,
      badge: "3-Pack Value",
      savings: "Save ₹1000"
    },
    {
      qty: 4,
      title: "4 Dresses",
      price: 4000,
      perDress: 1000,
      popular: true,
      badge: "🔥 BUY 4 FOR ₹4000 OFFER",
      savings: "Save ₹2000 (₹1000/pc)"
    },
    {
      qty: 5,
      title: "5 Dresses",
      price: 5500,
      perDress: 1100,
      popular: false,
      badge: "5-Pack Saver",
      savings: "Save ₹2000"
    },
    {
      qty: 6,
      title: "6 Dresses",
      price: 6000,
      perDress: 1000,
      popular: false,
      badge: "👑 6-Pack Festive Box",
      savings: "Save ₹3000 (₹1000/pc)"
    }
  ];

  const handleAddBundleToCart = (qty) => {
    const selected = products.slice(0, qty);
    selected.forEach((p) => {
      addToCart(p, 'L', 1);
    });
    setIsCartOpen(true);
  };

  return (
    <section
      id="pricing"
      style={{
        padding: '32px 24px',
        background: 'linear-gradient(180deg, #1A010B 0%, #2F0013 100%)',
        color: '#FDFBF7',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Compact Bar Title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
              <Crown size={18} />
            </div>
            <div>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
                Special Festive Bundle Offers
              </h3>
              <p style={{ color: 'rgba(253,251,247,0.75)', fontSize: '0.82rem', margin: 0 }}>
                🔥 <strong>Buy Any 2 Dresses for ONLY ₹2000</strong> • Applies to any lehengas in catalog!
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: '#FFF3A8', fontWeight: 600, background: 'rgba(212, 175, 55, 0.15)', padding: '4px 14px', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            ✨ Select any tier below to auto-fill cart
          </div>
        </div>

        {/* Compact Tiers Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '14px',
            alignItems: 'stretch'
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.qty}
              onClick={() => handleAddBundleToCart(tier.qty)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                padding: '16px 14px',
                background: tier.popular
                  ? 'linear-gradient(145deg, rgba(74, 0, 30, 0.95) 0%, rgba(106, 13, 37, 0.95) 100%)'
                  : 'rgba(26, 1, 11, 0.85)',
                border: tier.popular ? '2px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: tier.popular ? '0 0 20px rgba(212, 175, 55, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              className="product-card"
            >
              {tier.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '10px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)',
                    color: '#100006',
                    fontWeight: 800,
                    fontSize: '0.62rem',
                    letterSpacing: '0.5px',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)'
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <div>
                <div style={{ fontSize: '0.72rem', color: tier.popular ? '#FFF3A8' : '#D4AF37', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                  {tier.badge}
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span className="font-serif" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FDFBF7' }}>
                    {tier.title}
                  </span>
                  <span className="text-gold-gradient" style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-serif)' }}>
                    ₹{tier.price}
                  </span>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'rgba(253, 251, 247, 0.7)', marginBottom: '10px' }}>
                  ₹{tier.perDress}/pc • <strong style={{ color: '#25D366' }}>{tier.savings}</strong>
                </div>
              </div>

              <button
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '20px',
                  background: tier.popular ? 'linear-gradient(135deg, #D4AF37, #AA771C)' : 'rgba(212, 175, 55, 0.15)',
                  color: tier.popular ? '#100006' : '#FFF3A8',
                  border: tier.popular ? 'none' : '1px solid rgba(212, 175, 55, 0.3)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}
              >
                <ShoppingBag size={14} />
                <span>Select {tier.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

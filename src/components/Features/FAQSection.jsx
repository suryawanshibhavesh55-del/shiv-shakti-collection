import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Do you deliver across India?",
      a: "Yes! We ship across all 28 Indian states, union territories, and over 19,000+ pincodes via top express courier partners (Delhivery, Bluedart, Xpressbees). Delivery takes 3 to 5 business days."
    },
    {
      q: "What sizes are available?",
      a: "We offer inclusive Indian sizing from XS to 8XL (Bust 32 inches to 54 inches). Every dress is crafted with 2-inch internal side margins so you can easily adjust for your custom fit."
    },
    {
      q: "Is Cash on Delivery (COD) available?",
      a: "🚫 Cash on Delivery is NOT available. To keep our prices low and offer premium lehengas at ₹1500 with Buy 2 for ₹2000 offer directly from Udaipur, all orders are processed via WhatsApp payment link / UPI / Bank Transfer after checkout."
    },
    {
      q: "How can I order on this website?",
      a: "1. Select your preferred lehengas and sizes.\n2. Add them to your Cart.\n3. Click Proceed to Checkout and fill your shipping details.\n4. Click 'Place Order via WhatsApp'.\n5. Our system automatically formats your full order and opens WhatsApp (9352697128) where our team will confirm your order!"
    },
    {
      q: "Can I exchange if there is a size issue?",
      a: "Yes! We provide hassle-free size exchanges within 7 days of receiving your parcel. Please record an unboxing video when your package arrives."
    },
    {
      q: "Where is your store located?",
      a: "Our store is located at: शिव शक्ति कलेक्शन, चमनपुरा, उदयपुर, राजस्थान 313004."
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        padding: '90px 24px',
        background: '#FFF',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: '#4A001E',
              color: '#FFF3A8',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '12px'
            }}
          >
            <HelpCircle size={14} />
            <span>GOT QUESTIONS? WE ARE HERE</span>
          </div>

          <h2
            className="font-serif text-maroon-gradient"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700 }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#7A696E', fontSize: '1rem', marginTop: '8px' }}>
            Everything you need to know about ordering from SHIV SHAKTI COLLECTION
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '16px',
                border: openIdx === idx ? '1.5px solid #4A001E' : '1px solid #E0D5D8',
                background: openIdx === idx ? '#FDFBF7' : '#FFF',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#4A001E',
                  fontFamily: 'var(--font-serif)'
                }}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#D4AF37'
                  }}
                />
              </button>

              {openIdx === idx && (
                <div
                  style={{
                    padding: '0 24px 20px 24px',
                    color: '#4A001E',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    borderTop: '1px dashed rgba(74, 0, 30, 0.1)',
                    paddingTop: '14px',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {faq.a.includes("🚫") ? (
                    <div style={{ background: '#FFF3A8', color: '#100006', padding: '12px', borderRadius: '10px', fontWeight: 600 }}>
                      {faq.a}
                    </div>
                  ) : (
                    faq.a
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

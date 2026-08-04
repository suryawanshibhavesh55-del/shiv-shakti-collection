import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Flame } from 'lucide-react';

export const OffersRibbon = () => {
  // Countdown Timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const marqueeItems = [
    "🔥 BUY ANY 2 DRESSES FOR ₹2000 (ONLY ₹1000 EACH!)",
    "✨ FREE SHIPPING ACROSS INDIA",
    "👑 EVERY SINGLE DRESS JUST ₹1500",
    "👗 EXCLUSIVE UDAIPUR LEHENGA DESIGNS",
    "🏷️ SIZES AVAILABLE FROM XS TO 8XL",
    "💫 100% PREMIUM QUALITY GUARANTEED"
  ];

  return (
    <div id="offers-ribbon" style={{ background: '#100006', color: '#FDFBF7' }}>
      {/* Ticker Ribbon */}
      <div
        style={{
          background: 'linear-gradient(90deg, #D4AF37 0%, #F5D77F 25%, #AA771C 50%, #D4AF37 75%, #FFF3A8 100%)',
          color: '#100006',
          padding: '12px 0',
          overflow: 'hidden',
          fontWeight: 700,
          letterSpacing: '1px',
          fontSize: '0.9rem',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
          whiteSpace: 'nowrap',
          position: 'relative'
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: '40px',
            animation: 'shimmer 20s linear infinite'
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span>{item}</span>
              <span style={{ fontSize: '0.7rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Countdown Timer Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #4A001E 0%, #6A0D25 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '18px 24px'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D4AF37'
              }}
            >
              <Flame size={24} />
            </div>
            <div>
              <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.5px' }}>
                EXCLUSVE SPECIAL OFFER LIVE!
              </div>
              <div style={{ color: '#FDFBF7', opacity: 0.85, fontSize: '0.85rem' }}>
                Every Dress ₹1500 • <strong>Buy Any 2 Dresses for ONLY ₹2000!</strong> (Save ₹1000 Extra)
              </div>
            </div>
          </div>

          {/* Countdown Clock Display */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFF3A8', fontSize: '0.85rem', fontWeight: 600 }}>
              <Clock size={18} style={{ color: '#D4AF37' }} />
              <span>OFFER ENDS IN:</span>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <TimeBox label="HRS" value={String(timeLeft.hours).padStart(2, '0')} />
              <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.2rem', alignSelf: 'center' }}>:</span>
              <TimeBox label="MINS" value={String(timeLeft.minutes).padStart(2, '0')} />
              <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.2rem', alignSelf: 'center' }}>:</span>
              <TimeBox label="SECS" value={String(timeLeft.seconds).padStart(2, '0')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div
    style={{
      background: 'rgba(26, 1, 11, 0.8)',
      border: '1px solid rgba(212, 175, 55, 0.4)',
      borderRadius: '8px',
      padding: '4px 10px',
      textAlign: 'center',
      minWidth: '46px'
    }}
  >
    <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.1rem', fontFamily: 'monospace' }}>
      {value}
    </div>
    <div style={{ color: 'rgba(253,251,247,0.6)', fontSize: '0.6rem', fontWeight: 600 }}>
      {label}
    </div>
  </div>
);

import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'linear-gradient(135deg, #1A010B 0%, #4A001E 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FDFBF7',
        transition: 'opacity 0.5s ease'
      }}
    >
      <div
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
          color: '#100006',
          marginBottom: '20px',
          animation: 'pulseGold 1.5s infinite'
        }}
      >
        <Crown size={36} />
      </div>

      <h2
        className="font-serif text-gold-gradient"
        style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          letterSpacing: '3px',
          marginBottom: '8px'
        }}
      >
        SHIV SHAKTI
      </h2>

      <div
        style={{
          fontSize: '0.75rem',
          letterSpacing: '4px',
          color: '#FDFBF7',
          opacity: 0.8,
          textTransform: 'uppercase',
          fontWeight: 500
        }}
      >
        COLLECTION
      </div>

      <div
        style={{
          width: '140px',
          height: '2px',
          background: 'rgba(212, 175, 55, 0.2)',
          borderRadius: '2px',
          marginTop: '24px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '50%',
            background: 'linear-gradient(90deg, #D4AF37, #FFF3A8)',
            borderRadius: '2px',
            animation: 'shimmer 1.2s infinite'
          }}
        />
      </div>
    </div>
  );
};

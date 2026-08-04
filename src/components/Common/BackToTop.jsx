import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '90px',
        left: '24px',
        zIndex: 99,
        background: 'rgba(74, 0, 30, 0.9)',
        color: '#D4AF37',
        border: '1px solid rgba(212, 175, 55, 0.4)',
        backdropFilter: 'blur(10px)',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease'
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
};

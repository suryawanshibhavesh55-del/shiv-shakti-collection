import React, { useState, useEffect } from 'react';

export const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'rgba(212, 175, 55, 0.2)',
        zIndex: 99999
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${scrollPercent}%`,
          background: 'linear-gradient(90deg, #D4AF37 0%, #FFF3A8 50%, #AA771C 100%)',
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)',
          transition: 'width 0.1s linear'
        }}
      />
    </div>
  );
};

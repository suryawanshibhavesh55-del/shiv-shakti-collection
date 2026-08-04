import React, { useState, useEffect } from 'react';

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        transform: `translate3d(${pos.x - 175}px, ${pos.y - 175}px, 0)`,
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.15s ease-out'
      }}
      className="hidden lg:block"
    />
  );
};

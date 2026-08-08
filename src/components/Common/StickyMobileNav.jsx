import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Home, Grid, Heart, ShoppingBag, MessageCircle } from 'lucide-react';

export const StickyMobileNav = () => {
  const { totalCartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useShop();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/919352697128?text=" + encodeURIComponent(
    "Hello SHIV SHAKTI COLLECTION, I want to inquire about ordering lehengas."
  );

  return (
    <div
      className="md:hidden"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '65px',
        zIndex: 999,
        background: 'rgba(26, 1, 11, 0.96)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 8px'
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          background: 'none',
          border: 'none',
          color: '#FDFBF7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          fontSize: '0.7rem',
          cursor: 'pointer'
        }}
      >
        <Home size={20} style={{ color: '#D4AF37' }} />
        <span>Home</span>
      </button>

      <button
        onClick={() => scrollToSection('collections')}
        style={{
          background: 'none',
          border: 'none',
          color: '#FDFBF7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          fontSize: '0.7rem',
          cursor: 'pointer'
        }}
      >
        <Grid size={20} style={{ color: '#D4AF37' }} />
        <span>Catalog</span>
      </button>

      <button
        onClick={() => scrollToSection('collections')}
        style={{
          background: 'none',
          border: 'none',
          color: '#FDFBF7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          fontSize: '0.7rem',
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <Heart size={20} style={{ color: '#D4AF37' }} />
        <span>Wishlist</span>
        {wishlist.length > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '12px',
              background: '#6A0D25',
              color: '#FFF',
              fontSize: '0.65rem',
              fontWeight: 700,
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #D4AF37'
            }}
          >
            {wishlist.length}
          </span>
        )}
      </button>

      <button
        onClick={() => setIsCartOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          color: '#FDFBF7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          fontSize: '0.7rem',
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <ShoppingBag size={20} style={{ color: '#D4AF37' }} />
        <span>Cart</span>
        {totalCartCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-4px',
              right: '8px',
              background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
              color: '#100006',
              fontSize: '0.65rem',
              fontWeight: 700,
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {totalCartCount}
          </span>
        )}
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: 'none',
          border: 'none',
          color: '#25D366',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          fontSize: '0.7rem',
          textDecoration: 'none'
        }}
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

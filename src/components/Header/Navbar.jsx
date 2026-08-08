import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { ShoppingBag, Heart, Search, Menu, X, MessageCircle, Crown } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCartCount, wishlist, setIsCartOpen, setIsSearchOpen, setIsSizeChartOpen } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = "https://wa.me/919352697128?text=" + encodeURIComponent(
    "Hello SHIV SHAKTI COLLECTION, I want to inquire about your premium lehenga collection."
  );

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? 'rgba(26, 1, 11, 0.95)'
          : 'linear-gradient(to bottom, rgba(26, 1, 11, 0.9) 0%, rgba(26, 1, 11, 0) 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.25)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
      }}
    >
      {/* Top Banner Ribbon */}
      <div
        style={{
          background: 'linear-gradient(90deg, #4A001E 0%, #6A0D25 50%, #4A001E 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
          color: '#FFF3A8',
          padding: '6px 16px',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '1px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}
      >
        <span>👑 UDAIPUR PREMIUM LEHENGA STORE</span>
        <span className="hidden sm:inline" style={{ color: '#D4AF37' }}>•</span>
        <span>🔥 BUY ANY 2 DRESSES FOR ₹2000</span>
        <span className="hidden md:inline" style={{ color: '#D4AF37' }}>•</span>
        <span className="hidden md:inline">🚚 FREE SHIPPING ALL INDIA</span>
      </div>

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px'
        }}
      >
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#D4AF37',
            cursor: 'pointer',
            padding: '4px',
            flexShrink: 0
          }}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Brand Text Logo with Serif & Gold Icon */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
              color: '#100006',
              flexShrink: 0
            }}
          >
            <Crown size={18} />
          </div>
          <div>
            <span
              className="font-serif text-gold-gradient"
              style={{
                fontSize: 'clamp(0.95rem, 3.5vw, 1.35rem)',
                fontWeight: 700,
                letterSpacing: '1.5px',
                lineHeight: 1.1,
                display: 'block'
              }}
            >
              SHIV SHAKTI
            </span>
            <span
              style={{
                fontSize: '0.58rem',
                letterSpacing: '2px',
                color: '#FDFBF7',
                opacity: 0.85,
                textTransform: 'uppercase',
                fontWeight: 500,
                display: 'block'
              }}
            >
              COLLECTION
            </span>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav
          className="hidden lg:flex"
          style={{
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={navLinkStyle}
          >
            Home
          </button>
          <button onClick={() => scrollTo('collections')} style={navLinkStyle}>
            Collections
          </button>
          <button onClick={() => scrollTo('bestsellers')} style={navLinkStyle}>
            Best Sellers
          </button>
          <button onClick={() => scrollTo('pricing')} style={navLinkStyle}>
            Offers
          </button>
          <button onClick={() => setIsSizeChartOpen(true)} style={navLinkStyle}>
            Sizes (XS-8XL)
          </button>
          <button onClick={() => scrollTo('why-choose-us')} style={navLinkStyle}>
            Why Choose Us
          </button>
          <button onClick={() => scrollTo('reviews')} style={navLinkStyle}>
            Reviews
          </button>
          <button onClick={() => scrollTo('faq')} style={navLinkStyle}>
            FAQ
          </button>
          <button onClick={() => scrollTo('contact')} style={navLinkStyle}>
            Contact
          </button>
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
            style={{
              color: '#25D366',
              background: 'rgba(37, 211, 102, 0.1)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              padding: '7px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 600,
              textDecoration: 'none',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease'
            }}
          >
            <MessageCircle size={16} />
            <span>9352697128</span>
          </a>

          {/* Search Trigger */}
          <button
            onClick={() => scrollTo('collections')}
            title="Search Catalog"
            aria-label="Search Catalog"
            style={iconBtnStyle}
          >
            <Search size={20} />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => scrollTo('collections')}
            title="Wishlist"
            aria-label="Wishlist"
            style={{ ...iconBtnStyle, position: 'relative' }}
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span style={badgeStyle}>{wishlist.length}</span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            title="View Cart"
            aria-label="View Cart"
            style={{ ...iconBtnStyle, position: 'relative' }}
          >
            <ShoppingBag size={20} />
            {totalCartCount > 0 && (
              <span
                style={{
                  ...badgeStyle,
                  background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
                  color: '#100006'
                }}
              >
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'rgba(26, 1, 11, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <button onClick={() => scrollTo('collections')} style={mobileNavLinkStyle}>
            Collections Catalog
          </button>
          <button onClick={() => scrollTo('bestsellers')} style={mobileNavLinkStyle}>
            Best Sellers
          </button>
          <button onClick={() => scrollTo('pricing')} style={mobileNavLinkStyle}>
            Offers & Bundles
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsSizeChartOpen(true);
            }}
            style={mobileNavLinkStyle}
          >
            Size Guide (XS to 8XL)
          </button>
          <button onClick={() => scrollTo('why-choose-us')} style={mobileNavLinkStyle}>
            Why Choose Us
          </button>
          <button onClick={() => scrollTo('reviews')} style={mobileNavLinkStyle}>
            Customer Reviews
          </button>
          <button onClick={() => scrollTo('faq')} style={mobileNavLinkStyle}>
            FAQ
          </button>
          <button onClick={() => scrollTo('contact')} style={mobileNavLinkStyle}>
            Contact & Store Address
          </button>
        </div>
      )}
    </header>
  );
};

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#FDFBF7',
  fontSize: '0.9rem',
  fontWeight: 500,
  letterSpacing: '0.5px',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  padding: '6px 0'
};

const mobileNavLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#FDFBF7',
  fontSize: '1.05rem',
  fontWeight: 500,
  textAlign: 'left',
  padding: '10px 0',
  borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
  cursor: 'pointer'
};

const iconBtnStyle = {
  background: 'rgba(212, 175, 55, 0.1)',
  border: '1px solid rgba(212, 175, 55, 0.25)',
  color: '#D4AF37',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const badgeStyle = {
  position: 'absolute',
  top: '-5px',
  right: '-5px',
  background: '#6A0D25',
  color: '#FFF',
  fontSize: '0.65rem',
  fontWeight: 700,
  width: '18px',
  height: '18px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #D4AF37'
};

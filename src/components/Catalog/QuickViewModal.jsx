import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Heart, ShoppingBag, MessageCircle, Star, ShieldCheck, Truck, RotateCcw, Share2 } from 'lucide-react';

export const QuickViewModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    setIsSizeChartOpen,
    setIsCartOpen,
    showToast
  } = useShop();

  if (!quickViewProduct) return null;

  const [activeImage, setActiveImage] = useState(quickViewProduct.image);
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeMessage, setPincodeMessage] = useState('');

  const isWishlisted = wishlist.some((item) => item.id === quickViewProduct.id);

  const handleCheckPincode = (e) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeMessage(`🚚 Delivery available for ${pincode}! Expected delivery within 3-5 business days via Express Courier.`);
    } else {
      setPincodeMessage(`⚠️ Please enter a valid 6-digit Indian pincode.`);
    }
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, quantity);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedSize, quantity);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello SHIV SHAKTI COLLECTION,\nI would like to order:\n\n*Product:* ${quickViewProduct.name}\n*Size:* ${selectedSize}\n*Quantity:* ${quantity}\n*Price:* ₹${quickViewProduct.price * quantity}\n\nPlease share payment details and confirm my order!`;
    const whatsappUrl = `https://wa.me/918529593667?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(16, 0, 6, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={() => setQuickViewProduct(null)}
    >
      <div
        style={{
          background: '#FDFBF7',
          borderRadius: '24px',
          maxWidth: '1000px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#4A001E',
            color: '#D4AF37',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Gallery Left */}
        <div
          style={{ gridColumn: 'span 12', padding: '24px' }}
          className="md:col-span-6"
        >
          {/* Main Display Image */}
          <div
            style={{
              aspectRatio: '3/4',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#F5EBE6',
              marginBottom: '16px',
              position: 'relative',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={activeImage}
              alt={quickViewProduct.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {quickViewProduct.isBestSeller && (
              <span
                className="badge-popular"
                style={{ position: 'absolute', top: '16px', left: '16px' }}
              >
                BEST SELLER
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {quickViewProduct.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                style={{
                  width: '70px',
                  height: '85px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: activeImage === img ? '2px solid #4A001E' : '1px solid #E0D5D8',
                  padding: 0,
                  cursor: 'pointer'
                }}
              >
                <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>

        {/* Details Right */}
        <div
          style={{
            gridColumn: 'span 12',
            padding: '24px 32px 32px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="md:col-span-6"
        >
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6A0D25', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
              {quickViewProduct.category} • {quickViewProduct.fabric}
            </div>

            <h2
              className="font-serif"
              style={{ fontSize: '1.75rem', fontWeight: 700, color: '#16020A', marginBottom: '12px', lineHeight: 1.2 }}
            >
              {quickViewProduct.name}
            </h2>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', color: '#D4AF37' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#D4AF37" />
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#16020A' }}>
                {quickViewProduct.rating} ({quickViewProduct.reviewsCount} Customer Reviews)
              </span>
            </div>

            {/* Price Banner */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: '#4A001E', fontFamily: 'var(--font-serif)' }}>
                ₹{quickViewProduct.price}
              </span>
              <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: '#7A696E' }}>
                ₹{quickViewProduct.originalPrice}
              </span>
              <span style={{ background: '#4A001E', color: '#FFF3A8', fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                BUY 2 FOR ₹2000 ELIGIBLE
              </span>
            </div>

            {/* Sizes Selection */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4A001E' }}>
                  Select Size (XS to 8XL): <strong style={{ color: '#6A0D25' }}>{selectedSize}</strong>
                </span>
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  style={{ background: 'none', border: 'none', color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Size Chart Guide
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {quickViewProduct.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: selectedSize === sz ? '2px solid #4A001E' : '1px solid #E0D5D8',
                      background: selectedSize === sz ? '#4A001E' : '#FFF',
                      color: selectedSize === sz ? '#FFF3A8' : '#4A001E',
                      cursor: 'pointer'
                    }}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4A001E' }}>Quantity:</span>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #4A001E', borderRadius: '8px', overflow: 'hidden' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ width: '36px', height: '36px', background: '#F5EBE6', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
                >
                  -
                </button>
                <span style={{ width: '40px', textAlign: 'center', fontWeight: 700 }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ width: '36px', height: '36px', background: '#F5EBE6', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Pincode & Delivery Calculator */}
            <div
              style={{
                background: '#F5EBE6',
                padding: '14px',
                borderRadius: '12px',
                marginBottom: '24px',
                border: '1px solid rgba(74, 0, 30, 0.15)'
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#4A001E', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Truck size={16} />
                <span>Estimate Delivery Time</span>
              </div>
              <form onSubmit={handleCheckPincode} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Enter 6-Digit Pincode"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  style={{
                    flexGrow: 1,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.85rem'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: '#4A001E',
                    color: '#FFF3A8',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  Check
                </button>
              </form>
              {pincodeMessage && (
                <div style={{ fontSize: '0.8rem', color: '#4A001E', marginTop: '8px', fontWeight: 600 }}>
                  {pincodeMessage}
                </div>
              )}
            </div>

            {/* Product Specifications Table */}
            <div style={{ marginBottom: '24px', borderTop: '1px dashed #E0D5D8', paddingTop: '16px' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#4A001E', marginBottom: '10px' }}>
                Product Specifications
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.82rem' }}>
                <div><strong>Fabric:</strong> {quickViewProduct.fabric}</div>
                <div><strong>Fit Type:</strong> {quickViewProduct.fit}</div>
                <div><strong>Wash Care:</strong> Dry Clean Only</div>
                <div><strong>Occasions:</strong> Wedding, Sangeet & Festive</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                onClick={handleAddToCart}
                style={{
                  padding: '14px',
                  borderRadius: '30px',
                  background: '#4A001E',
                  color: '#FFF3A8',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="btn-gold"
                style={{ borderRadius: '30px', padding: '14px', fontSize: '0.95rem', justifyContent: 'center' }}
              >
                <span>Buy Now</span>
              </button>
            </div>

            {/* WhatsApp Quick Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '30px',
                background: '#25D366',
                color: '#FFF',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <MessageCircle size={18} />
              <span>Instant Order via WhatsApp (8529593667)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

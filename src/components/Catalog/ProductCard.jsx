import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Heart, Eye, ShoppingBag, Share2, Star, Check } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const {
    addToCart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct,
    trackRecentlyViewed,
    showToast,
    setIsCartOpen
  } = useShop();

  const [selectedSize, setSelectedSize] = useState('L');
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleQuickView = () => {
    trackRecentlyViewed(product);
    setQuickViewProduct(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setIsCartOpen(true);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} on SHIV SHAKTI COLLECTION!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard! 📋', 'info');
    }
  };

  return (
    <div
      className="product-card"
      style={{
        background: '#FFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer'
      }}
      onClick={handleQuickView}
    >
      {/* Image Container */}
      <div className="product-image-container" style={{ aspectRatio: '3/4', background: '#F5EBE6' }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Top Badges Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 2
          }}
        >
          {product.isBestSeller && (
            <span className="badge-popular" style={{ fontSize: '0.65rem', padding: '3px 10px' }}>
              BEST SELLER
            </span>
          )}
          <span
            style={{
              background: '#4A001E',
              color: '#FFF3A8',
              fontSize: '0.65rem',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.4)'
            }}
          >
            {product.discountPercent}% OFF
          </span>
        </div>

        {/* Top Right Action Icons */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            zIndex: 2
          }}
        >
          {/* Wishlist Heart */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: isWishlisted ? '#4A001E' : 'rgba(255, 255, 255, 0.9)',
              color: isWishlisted ? '#D4AF37' : '#4A001E',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s ease'
            }}
          >
            <Heart size={18} fill={isWishlisted ? '#D4AF37' : 'none'} />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Share Product"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#4A001E',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            <Share2 size={16} />
          </button>
        </div>

        {/* Quick View Hover Button Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            right: '12px',
            zIndex: 3
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleQuickView();
            }}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '30px',
              background: 'rgba(74, 0, 30, 0.9)',
              color: '#FFF3A8',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              backdropFilter: 'blur(8px)',
              fontWeight: 600,
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Eye size={16} />
            <span>Quick View & Specs</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div
        style={{
          padding: '18px 16px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          {/* Category & Fabric Spec */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px'
            }}
          >
            <span style={{ fontSize: '0.72rem', color: '#6A0D25', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {product.category}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#7A696E', fontWeight: 500 }}>
              {product.fabric}
            </span>
          </div>

          {/* Product Name */}
          <h3
            className="font-serif"
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#16020A',
              marginBottom: '8px',
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '10px' }}>
            <Star size={14} fill="#D4AF37" color="#D4AF37" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#16020A' }}>{product.rating}</span>
            <span style={{ fontSize: '0.78rem', color: '#7A696E' }}>({product.reviewsCount})</span>
          </div>

          {/* Price Display */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#4A001E', fontFamily: 'var(--font-serif)' }}>
              ₹{product.price}
            </span>
            <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: '#7A696E' }}>
              ₹{product.originalPrice}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#25D366', fontWeight: 700 }}>
              Buy 2 for ₹2000
            </span>
          </div>
        </div>

        {/* Size Selection Row & Action Buttons */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4A001E' }}>Select Size:</span>
            <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', maxWidth: '160px', paddingBottom: '2px' }}>
              {["S", "M", "L", "XL", "XXL"].map((sz) => (
                <button
                  key={sz}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(sz);
                  }}
                  style={{
                    padding: '2px 6px',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    border: selectedSize === sz ? '1px solid #4A001E' : '1px solid #E0D5D8',
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

          {/* Buttons: Add to Cart & Buy Now */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '10px',
                borderRadius: '20px',
                background: '#F5EBE6',
                color: '#4A001E',
                border: '1px solid rgba(74, 0, 30, 0.2)',
                fontWeight: 700,
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <ShoppingBag size={14} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleBuyNow}
              style={{
                padding: '10px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #4A001E, #6A0D25)',
                color: '#FFF3A8',
                border: 'none',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalCartCount,
    bundleInfo,
    setIsCheckoutOpen
  } = useShop();

  if (!isCartOpen) return null;

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(16, 0, 6, 0.8)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          background: '#FDFBF7',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.4)',
          position: 'relative',
          animation: 'fadeUp 0.3s ease'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div
          style={{
            padding: '20px 24px',
            background: 'linear-gradient(135deg, #4A001E 0%, #6A0D25 100%)',
            color: '#FDFBF7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} style={{ color: '#D4AF37' }} />
            <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FDFBF7' }}>
              Your Royal Shopping Cart ({totalCartCount})
            </h3>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#D4AF37',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Tier Savings Banner */}
        {totalCartCount > 0 && (
          <div
            style={{
              background: 'linear-gradient(90deg, #D4AF37 0%, #F5D77F 100%)',
              color: '#100006',
              padding: '10px 20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} />
              <span>{bundleInfo.bundleName}</span>
            </div>
            {bundleInfo.savings > 0 && (
              <span style={{ background: '#4A001E', color: '#FFF3A8', padding: '2px 8px', borderRadius: '10px', fontSize: '0.75rem' }}>
                Saved ₹{bundleInfo.savings}!
              </span>
            )}
          </div>
        )}

        {/* Next Tier Hint */}
        {bundleInfo.nextTierHint && totalCartCount > 0 && (
          <div style={{ background: '#FFF3A8', color: '#4A001E', padding: '8px 20px', fontSize: '0.78rem', fontWeight: 600, textAlign: 'center' }}>
            {bundleInfo.nextTierHint}
          </div>
        )}

        {/* Cart Items List */}
        <div
          style={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🛍️</div>
              <h4 className="font-serif" style={{ fontSize: '1.2rem', color: '#4A001E', marginBottom: '8px' }}>
                Your Cart is Empty
              </h4>
              <p style={{ color: '#7A696E', fontSize: '0.9rem', marginBottom: '20px' }}>
                Explore our luxury lehenga collection and add your favorite dresses!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-maroon"
                style={{ padding: '10px 24px', fontSize: '0.85rem' }}
              >
                Browse Collection
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${idx}`}
                style={{
                  display: 'flex',
                  gap: '14px',
                  background: '#FFF',
                  padding: '12px',
                  borderRadius: '16px',
                  border: '1px solid rgba(74, 0, 30, 0.15)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  style={{
                    width: '75px',
                    height: '95px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    flexShrink: 0
                  }}
                />

                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#16020A', lineHeight: 1.2 }}>
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        style={{ background: 'none', border: 'none', color: '#7A696E', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#6A0D25', marginTop: '4px', fontWeight: 600 }}>
                      Size: <strong>{item.size}</strong> • Fabric: {item.product.fabric}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E0D5D8', borderRadius: '6px' }}>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, -1)}
                        style={{ width: '26px', height: '26px', border: 'none', background: '#F5EBE6', cursor: 'pointer' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span style={{ padding: '0 10px', fontSize: '0.85rem', fontWeight: 700 }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, 1)}
                        style={{ width: '26px', height: '26px', border: 'none', background: '#F5EBE6', cursor: 'pointer' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div style={{ fontWeight: 800, color: '#4A001E', fontSize: '0.95rem' }}>
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout CTA */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '20px 24px',
              background: '#FFF',
              borderTop: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 -10px 25px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#7A696E' }}>
              <span>Total Dresses Added:</span>
              <span style={{ fontWeight: 700, color: '#16020A' }}>{totalCartCount} Items</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#7A696E' }}>
              <span>Shipping Fee:</span>
              <span style={{ fontWeight: 700, color: '#25D366' }}>FREE (All India)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 800, color: '#4A001E' }}>
              <span>Total Offer Price:</span>
              <span className="font-serif" style={{ fontSize: '1.4rem', color: '#4A001E' }}>
                ₹{bundleInfo.totalPrice}
              </span>
            </div>

            <button
              onClick={handleProceedCheckout}
              className="btn-gold"
              style={{ width: '100%', padding: '16px', borderRadius: '30px', fontSize: '1rem', justifyContent: 'center' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

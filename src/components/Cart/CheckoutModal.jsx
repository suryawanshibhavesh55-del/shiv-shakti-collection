import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ShieldAlert, MessageCircle, AlertCircle, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutModal = () => {
  const {
    cart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    bundleInfo,
    clearCart,
    showToast
  } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    state: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';

    if (!formData.address.trim()) newErrors.address = 'Full Address is required';

    if (!formData.state.trim()) newErrors.state = 'State is required';

    const cleanPincode = formData.pincode.trim().replace(/\D/g, '');
    if (!cleanPincode || cleanPincode.length !== 6) {
      newErrors.pincode = 'Valid 6-digit PIN Code is required';
    }

    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      newErrors.phone = 'Valid 10-digit Mobile Number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('⚠️ Please fill in all required fields.', 'warning');
      return;
    }

    // Trigger Gold & Maroon Confetti
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#4A001E', '#6A0D25', '#FFF3A8']
      });
    } catch {
      // fallback
    }

    // Format Products & Sizes Text
    const productsText = cart
      .map(
        (item) =>
          `• ${item.product.name} (Size: ${item.size}, Qty: ${item.quantity})`
      )
      .join('\n');

    // Formatted WhatsApp Order Message
    const whatsappMessage = `Hello SHIV SHAKTI COLLECTION,

New Order

Name:-
${formData.fullName}

Full Address:-
${formData.address}

State:-
${formData.state}

PIN Code:-
${formData.pincode}

Mobile Number:-
${formData.phone}

Products & Sizes:-
${productsText}

Total Amount: ₹${bundleInfo.totalPrice}

✅ 7-Day Return Policy Available

✨ Thank you for your order! ✨`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919352697128&text=${encodedMessage}`;

    showToast('Redirecting to WhatsApp...', 'success');

    const win = window.open(whatsappUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }

    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(16, 0, 6, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={() => setIsCheckoutOpen(false)}
    >
      <div
        style={{
          background: '#FDFBF7',
          borderRadius: '24px',
          maxWidth: '650px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          padding: '28px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsCheckoutOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#4A001E',
            color: '#D4AF37',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 className="font-serif text-maroon-gradient" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
            Checkout & Order Details
          </h2>
          <p style={{ color: '#7A696E', fontSize: '0.88rem', marginTop: '4px' }}>
            Fill details below to send order directly to WhatsApp (9352697128).
          </p>
        </div>

        {/* Prominent Payment Notice Banner */}
        <div
          style={{
            background: '#4A001E',
            color: '#FFF3A8',
            padding: '12px 16px',
            borderRadius: '16px',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <ShieldAlert size={24} style={{ color: '#D4AF37', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>
              🚫 Cash on Delivery is NOT Available
            </div>
            <div style={{ fontSize: '0.78rem', color: '#FDFBF7', opacity: 0.9, marginTop: '2px' }}>
              Orders are confirmed on WhatsApp after filling details. Payment link / UPI will be provided on WhatsApp.
            </div>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
            {/* Name */}
            <div>
              <label style={labelStyle}>Name:- *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                style={inputStyle(errors.fullName)}
              />
              {errors.fullName && <span style={errorTextStyle}>{errors.fullName}</span>}
            </div>

            {/* Full Address */}
            <div>
              <label style={labelStyle}>Full Address:- *</label>
              <input
                type="text"
                name="address"
                placeholder="Enter house no, street, colony & area"
                value={formData.address}
                onChange={handleChange}
                style={inputStyle(errors.address)}
              />
              {errors.address && <span style={errorTextStyle}>{errors.address}</span>}
            </div>

            {/* State & PIN Code */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={labelStyle}>State:- *</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                  style={inputStyle(errors.state)}
                />
                {errors.state && <span style={errorTextStyle}>{errors.state}</span>}
              </div>

              <div>
                <label style={labelStyle}>PIN Code:- *</label>
                <input
                  type="text"
                  name="pincode"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code"
                  value={formData.pincode}
                  onChange={handleChange}
                  style={inputStyle(errors.pincode)}
                />
                {errors.pincode && <span style={errorTextStyle}>{errors.pincode}</span>}
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label style={labelStyle}>Mobile Number:- *</label>
              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle(errors.phone)}
              />
              {errors.phone && <span style={errorTextStyle}>{errors.phone}</span>}
            </div>

            {/* Ordered Items & Sizes Summary */}
            <div
              style={{
                background: '#F5EBE6',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(74, 0, 30, 0.15)',
                fontSize: '0.85rem'
              }}
            >
              <label style={{ ...labelStyle, marginBottom: '6px' }}>Ordered Products & Sizes:-</label>
              {cart.map((item, idx) => (
                <div key={idx} style={{ color: '#4A001E', fontWeight: 600, marginTop: '2px' }}>
                  • {item.product.name} — <strong>Size {item.size}</strong> (Qty: {item.quantity})
                </div>
              ))}
            </div>
          </div>

          {/* Validation Error Message */}
          {Object.keys(errors).length > 0 && (
            <div
              style={{
                background: '#FFE4E6',
                color: '#9F1239',
                padding: '10px 14px',
                borderRadius: '12px',
                marginBottom: '16px',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <AlertCircle size={18} />
              <span>Please fill in all required fields above.</span>
            </div>
          )}

          {/* Trust Highlights */}
          <div
            style={{
              background: 'rgba(37, 211, 102, 0.1)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: '14px',
              padding: '12px 16px',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          >
            <div style={{ color: '#0F766E', fontWeight: 700, fontSize: '0.9rem' }}>
              ✅ 7-Day Return Policy Available
            </div>
            <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.95rem', marginTop: '4px' }}>
              ✨ Thank you for your order! ✨
            </div>
          </div>

          {/* Payable Summary & Submit */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              fontWeight: 800,
              color: '#4A001E',
              fontSize: '1.1rem'
            }}
          >
            <span>Total Amount Payable:</span>
            <span className="font-serif" style={{ fontSize: '1.35rem', color: '#4A001E' }}>
              ₹{bundleInfo.totalPrice}
            </span>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '30px',
              background: '#25D366',
              color: '#FFF',
              border: 'none',
              fontWeight: 800,
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)'
            }}
          >
            <MessageCircle size={22} />
            <span>Place Order on WhatsApp (9352697128)</span>
          </button>
        </form>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: 700,
  color: '#4A001E',
  marginBottom: '4px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const inputStyle = (isError) => ({
  width: '100%',
  padding: '10px 14px',
  borderRadius: '12px',
  border: isError ? '2px solid #E11D48' : '1px solid #CBD5E1',
  background: '#FFF',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'var(--font-body)'
});

const errorTextStyle = {
  color: '#E11D48',
  fontSize: '0.75rem',
  fontWeight: 700,
  marginTop: '3px',
  display: 'block'
};

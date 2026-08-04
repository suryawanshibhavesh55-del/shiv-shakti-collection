import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PRODUCTS } from '../../data/products';

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Pooja Sharma",
      location: "Udaipur, Rajasthan",
      rating: 5,
      date: "2 days ago",
      verified: true,
      size: "Size XL",
      comment: "I bought 2 dresses in the Buy Any 2 Dresses for ₹2000 offer. The velvet bridal lehenga quality is mind-blowing! Feels like a designer ₹15,000 piece. Ordering via WhatsApp from SHIV SHAKTI COLLECTION was super fast and easy.",
      image: PRODUCTS[0]?.image || '/assets/WhatsApp Image 2026-08-04 at 8.10.02 PM.jpeg'
    },
    {
      id: 2,
      name: "Ananya Deshmukh",
      location: "Mumbai, Maharashtra",
      rating: 5,
      date: "4 days ago",
      verified: true,
      size: "Size 4XL",
      comment: "Finding plus size lehengas in 4XL with perfect fittings is so hard, but SHIV SHAKTI COLLECTION delivered beyond expectations! Soft fabric, non-itching embroidery. Delivered in 3 days.",
      image: PRODUCTS[2]?.image || '/assets/WhatsApp Image 2026-08-04 at 8.10.03 PM (2).jpeg'
    },
    {
      id: 3,
      name: "Meenakshi Sundaram",
      location: "Bengaluru, Karnataka",
      rating: 5,
      date: "1 week ago",
      verified: true,
      size: "Size M",
      comment: "Stunning Chanderi silk lehenga! Colors are identical to the pictures. The gold embroidery is very rich. Will order 4 dresses bundle next time!",
      image: PRODUCTS[4]?.image || '/assets/WhatsApp Image 2026-08-04 at 8.10.04 PM (1).jpeg'
    },
    {
      id: 4,
      name: "Ritu Verma",
      location: "Jaipur, Rajasthan",
      rating: 5,
      date: "1 week ago",
      verified: true,
      size: "Size XXL",
      comment: "I ordered online via WhatsApp for a family wedding. Exactly original SHIV SHAKTI COLLECTION market quality. 100% recommended for affordable premium lehengas!",
      image: PRODUCTS[6]?.image || '/assets/WhatsApp Image 2026-08-04 at 8.10.04 PM.jpeg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      style={{
        padding: '90px 24px',
        background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EBE6 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '20px',
              background: '#4A001E',
              color: '#FFF3A8',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '1px',
              marginBottom: '12px'
            }}
          >
            REAL CUSTOMER LOVE
          </div>

          <h2
            className="font-serif text-maroon-gradient"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700 }}
          >
            Loved by 10,000+ Women
          </h2>
          <p style={{ color: '#7A696E', fontSize: '1rem', marginTop: '8px' }}>
            Read real feedback from verified customers across India
          </p>
        </div>

        {/* Carousel View */}
        <div
          style={{
            position: 'relative',
            maxWidth: '850px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              background: '#FFF',
              borderRadius: '24px',
              padding: '36px',
              border: '1.5px solid rgba(212, 175, 55, 0.4)',
              boxShadow: '0 20px 40px rgba(74, 0, 30, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            <div style={{ gridColumn: 'span 12' }} className="md:col-span-4">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}
              />
            </div>

            <div
              style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              className="md:col-span-8"
            >
              <Quote size={40} style={{ color: 'rgba(212, 175, 55, 0.4)', marginBottom: '12px' }} />

              <div style={{ display: 'flex', color: '#D4AF37', marginBottom: '12px' }}>
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#D4AF37" />
                ))}
              </div>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: '#16020A',
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}
              >
                "{reviews[currentIndex].comment}"
              </p>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="font-serif" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#4A001E' }}>
                    {reviews[currentIndex].name}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'rgba(37, 211, 102, 0.15)',
                      color: '#0F766E',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '12px'
                    }}
                  >
                    <CheckCircle size={12} />
                    <span>Verified Order</span>
                  </span>
                </div>
                <div style={{ color: '#7A696E', fontSize: '0.85rem', marginTop: '4px' }}>
                  {reviews[currentIndex].location} • {reviews[currentIndex].size}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '24px'
            }}
          >
            <button
              onClick={prevReview}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#4A001E',
                color: '#D4AF37',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextReview}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#4A001E',
                color: '#D4AF37',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

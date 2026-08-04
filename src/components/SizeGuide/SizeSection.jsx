import React from 'react';
import { useShop } from '../../context/ShopContext';
import { SIZES, SIZE_CHART } from '../../data/products';
import { Ruler, Check, X } from 'lucide-react';

export const SizeSection = () => {
  const { setIsSizeChartOpen } = useShop();

  return (
    <section
      id="sizes"
      style={{
        padding: '90px 24px',
        background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EBE6 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
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
            <Ruler size={14} />
            <span>INCLUSIVE INDIAN TAILORING</span>
          </div>

          <h2
            className="font-serif text-maroon-gradient"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700 }}
          >
            Available Sizes (XS to 8XL)
          </h2>
          <p style={{ color: '#7A696E', fontSize: '1rem', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0' }}>
            We celebrate every Indian woman's silhouette! Custom royal tailoring ensures a flawless comfort fit for all body types.
          </p>

          <button
            onClick={() => setIsSizeChartOpen(true)}
            className="btn-maroon"
            style={{ marginTop: '20px', padding: '12px 28px', fontSize: '0.9rem' }}
          >
            <Ruler size={18} />
            <span>Open Complete Size Chart Guide</span>
          </button>
        </div>

        {/* Size Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '16px'
          }}
        >
          {SIZE_CHART.map((item) => (
            <div
              key={item.size}
              style={{
                background: '#FFF',
                borderRadius: '16px',
                padding: '20px 14px',
                textAlign: 'center',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 6px 16px rgba(74, 0, 30, 0.05)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              className="product-card"
            >
              <div
                className="font-serif"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#4A001E',
                  marginBottom: '6px'
                }}
              >
                {item.size}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6A0D25', fontWeight: 700 }}>
                Bust {item.bust}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#7A696E', marginTop: '4px' }}>
                Waist {item.waist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SizeChartModal = () => {
  const { isSizeChartOpen, setIsSizeChartOpen } = useShop();

  if (!isSizeChartOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(16, 0, 6, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={() => setIsSizeChartOpen(false)}
    >
      <div
        style={{
          background: '#FDFBF7',
          borderRadius: '24px',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '32px',
          border: '1.5px solid rgba(212, 175, 55, 0.4)',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setIsSizeChartOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#4A001E',
            color: '#D4AF37',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h3 className="font-serif text-maroon-gradient" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
            SHIV SHAKTI COLLECTION - Official Size Guide
          </h3>
          <p style={{ color: '#7A696E', fontSize: '0.9rem', marginTop: '4px' }}>
            All measurements are in inches. Lehengas come with 2-inch side margin for easy alteration.
          </p>
        </div>

        {/* Size Table */}
        <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'center',
              fontSize: '0.88rem'
            }}
          >
            <thead>
              <tr style={{ background: '#4A001E', color: '#FFF3A8' }}>
                <th style={thStyle}>Size</th>
                <th style={thStyle}>Bust (Inches)</th>
                <th style={thStyle}>Waist (Inches)</th>
                <th style={thStyle}>Hip (Inches)</th>
                <th style={thStyle}>Length (Inches)</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_CHART.map((row, idx) => (
                <tr
                  key={row.size}
                  style={{
                    background: idx % 2 === 0 ? '#FFF' : '#F5EBE6',
                    borderBottom: '1px solid rgba(74, 0, 30, 0.1)'
                  }}
                >
                  <td style={{ ...tdStyle, fontWeight: 700, color: '#4A001E' }}>{row.size}</td>
                  <td style={tdStyle}>{row.bust}</td>
                  <td style={tdStyle}>{row.waist}</td>
                  <td style={tdStyle}>{row.hip}</td>
                  <td style={tdStyle}>{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measurement Tips */}
        <div style={{ background: '#F5EBE6', padding: '16px', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <h4 style={{ color: '#4A001E', fontSize: '0.9rem', fontWeight: 700, marginBottom: '6px' }}>
            💡 Measurement Advice from our Master Tailor:
          </h4>
          <ul style={{ color: '#7A696E', fontSize: '0.82rem', paddingLeft: '20px', lineHeight: 1.5 }}>
            <li>Measure around the fullest part of your bust while standing straight.</li>
            <li>For flared Lehengas, select based on your exact Bust & Waist size.</li>
            <li>If you are between two sizes, we recommend choosing the larger size for a relaxed, graceful drape.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '12px',
  fontWeight: 700,
  letterSpacing: '0.5px'
};

const tdStyle = {
  padding: '10px 12px'
};

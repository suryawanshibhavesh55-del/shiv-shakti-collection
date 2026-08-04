import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES, SIZES, COLOR_OPTIONS } from '../../data/products';
import { Search, Filter, RotateCcw } from 'lucide-react';

export const ProductFilter = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    sortBy,
    setSortBy,
    setIsSizeChartOpen
  } = useShop();

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedSize('All');
    setSelectedColor('All');
    setSortBy('featured');
  };

  return (
    <div
      style={{
        background: '#FFF',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 10px 30px rgba(74, 0, 30, 0.08)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        marginBottom: '40px'
      }}
    >
      {/* Search Input Bar */}
      <div
        style={{
          position: 'relative',
          marginBottom: '20px'
        }}
      >
        <Search
          size={20}
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#7A696E'
          }}
        />
        <input
          type="text"
          placeholder="Search by lehenga name, fabric (Velvet, Silk, Georgette) or style..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 16px 14px 48px',
            borderRadius: '30px',
            border: '1px solid rgba(74, 0, 30, 0.15)',
            background: 'var(--color-ivory)',
            fontSize: '0.95rem',
            outline: 'none',
            fontFamily: 'var(--font-body)',
            transition: 'border-color 0.3s ease'
          }}
        />
      </div>

      {/* Category Pills */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#4A001E',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}
        >
          Category
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: selectedCategory === cat ? '1px solid #4A001E' : '1px solid rgba(74, 0, 30, 0.15)',
                background: selectedCategory === cat ? '#4A001E' : '#FDFBF7',
                color: selectedCategory === cat ? '#FFF3A8' : '#4A001E',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes & Colors Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          alignItems: 'center'
        }}
      >
        {/* Size Filter */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4A001E', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Size Filter (XS to 8XL)
            </span>
            <button
              onClick={() => setIsSizeChartOpen(true)}
              style={{ background: 'none', border: 'none', color: '#D4AF37', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
            >
              Size Chart Guide
            </button>
          </div>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1px solid rgba(74, 0, 30, 0.2)',
              background: '#FDFBF7',
              color: '#4A001E',
              fontWeight: 600,
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value="All">All Sizes (XS - 8XL)</option>
            {SIZES.map((sz) => (
              <option key={sz} value={sz}>Size {sz}</option>
            ))}
          </select>
        </div>

        {/* Color Filter */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4A001E', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            Shade / Color
          </div>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1px solid rgba(74, 0, 30, 0.2)',
              background: '#FDFBF7',
              color: '#4A001E',
              fontWeight: 600,
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value="All">All Luxury Shades</option>
            {COLOR_OPTIONS.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4A001E', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            Sort By
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1px solid rgba(74, 0, 30, 0.2)',
              background: '#FDFBF7',
              color: '#4A001E',
              fontWeight: 600,
              fontSize: '0.9rem',
              outline: 'none'
            }}
          >
            <option value="featured">Featured Collection</option>
            <option value="bestseller">Best Sellers First</option>
            <option value="rating">Top Rated (5 Stars)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Reset Filter Button */}
      {(searchTerm || selectedCategory !== 'All' || selectedSize !== 'All' || selectedColor !== 'All') && (
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={resetFilters}
            style={{
              background: 'none',
              border: 'none',
              color: '#6A0D25',
              fontWeight: 600,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={14} />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};

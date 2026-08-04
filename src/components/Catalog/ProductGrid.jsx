import React, { useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from './ProductCard';
import { ProductFilter } from './ProductFilter';
import { Crown, Sparkles, Clock } from 'lucide-react';

export const ProductGrid = () => {
  const {
    products,
    searchTerm,
    selectedCategory,
    selectedSize,
    selectedColor,
    sortBy,
    recentlyViewed,
    setQuickViewProduct
  } = useShop();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search
      const matchSearch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.fabric.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());

      // Category
      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      // Size
      const matchSize =
        selectedSize === 'All' || product.sizes.includes(selectedSize);

      // Color
      const matchColor =
        selectedColor === 'All' || product.color === selectedColor;

      return matchSearch && matchCategory && matchSize && matchColor;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return parseFloat(b.rating) - parseFloat(a.rating);
      if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return 0;
    });
  }, [products, searchTerm, selectedCategory, selectedSize, selectedColor, sortBy]);

  const bestSellers = useMemo(() => {
    return products.filter((p) => p.isBestSeller).slice(0, 8);
  }, [products]);

  return (
    <section
      id="collections"
      style={{
        padding: '80px 24px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      {/* Best Sellers Highlight Section */}
      <div id="bestsellers" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <Sparkles size={14} />
            <span>MOST LOVED BY 10,000+ CUSTOMERS</span>
          </div>

          <h2
            className="font-serif text-maroon-gradient"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700 }}
          >
            Best Seller Lehengas
          </h2>
          <p style={{ color: '#7A696E', fontSize: '1rem', marginTop: '8px' }}>
            Handpicked Trending Designs from Udaipur Market
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Main Catalog Section */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#D4AF37',
            fontWeight: 700,
            fontSize: '0.82rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}
        >
          <Crown size={16} />
          <span>EXPLORE OUR ROYAL VAULT</span>
        </div>

        <h2
          className="font-serif text-maroon-gradient"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700 }}
        >
          Exclusive Lehenga Collection
        </h2>
        <p style={{ color: '#7A696E', fontSize: '1rem', marginTop: '8px' }}>
          Showing {filteredProducts.length} Premium Lehengas & Wedding Ensembles
        </p>
      </div>

      {/* Filter Component */}
      <ProductFilter />

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '60px 24px',
            background: '#FFF',
            borderRadius: '20px',
            border: '1px dashed rgba(74, 0, 30, 0.2)'
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>👗</div>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#4A001E', marginBottom: '8px' }}>
            No Lehengas Found
          </h3>
          <p style={{ color: '#7A696E', fontSize: '0.95rem' }}>
            Try adjusting your category, size, or color filter criteria.
          </p>
        </div>
      )}

      {/* Recently Viewed Section */}
      {recentlyViewed.length > 0 && (
        <div
          style={{
            marginTop: '100px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(212, 175, 55, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <Clock size={20} style={{ color: '#D4AF37' }} />
            <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#4A001E', fontWeight: 700 }}>
              Recently Viewed Lehengas
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            {recentlyViewed.map((item) => (
              <div
                key={item.id}
                onClick={() => setQuickViewProduct(item)}
                style={{
                  background: '#FFF',
                  borderRadius: '14px',
                  padding: '10px',
                  border: '1px solid rgba(74, 0, 30, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', height: '75px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4A001E', lineHeight: 1.2 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 700, marginTop: '4px' }}>
                    ₹{item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

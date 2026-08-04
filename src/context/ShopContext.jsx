import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const calculateBundlePricing = (totalItems) => {
  if (totalItems === 0) return { totalPrice: 0, bundleName: 'No Items', savings: 0 };
  
  const pairs = Math.floor(totalItems / 2);
  const remainder = totalItems % 2;
  const totalPrice = pairs * 2000 + remainder * 1500;
  const regularPrice = totalItems * 1500;
  const savings = regularPrice - totalPrice;

  if (totalItems === 1) {
    return { 
      totalPrice: 1500, 
      bundleName: '1 Dress Tier (₹1500)', 
      savings: 0, 
      nextTierHint: '🔥 Add just 1 MORE dress to get 2 dresses for ONLY ₹2000! (Save ₹1000 instantly)' 
    };
  }

  if (totalItems === 2) {
    return { 
      totalPrice: 2000, 
      bundleName: '🔥 Special Offer: Buy Any 2 Dresses for ₹2000', 
      savings: 1000, 
      nextTierHint: 'Add 1 more dress for ₹3500, or add 2 more to get 4 dresses for ₹4000!' 
    };
  }

  if (totalItems === 3) {
    return { 
      totalPrice: 3500, 
      bundleName: '3 Dresses (1 Special Offer + 1 Single)', 
      savings: 1000, 
      nextTierHint: '🔥 Add 1 MORE dress to unlock 4 dresses for ONLY ₹4000! (Save ₹2000)' 
    };
  }

  if (totalItems === 4) {
    return { 
      totalPrice: 4000, 
      bundleName: '👑 Double Offer: 4 Dresses for ₹4000', 
      savings: 2000, 
      nextTierHint: 'Add 1 more dress to get 5 for ₹5500, or 2 more to get 6 for ₹6000!' 
    };
  }

  return { 
    totalPrice: totalPrice, 
    bundleName: `👑 Special Offer Pack: ${totalItems} Dresses`, 
    savings: savings, 
    nextTierHint: remainder === 1 ? '🔥 Add 1 more dress to unlock the pair offer discount!' : 'Special Offer Discount Applied!' 
  };
};

export const ShopProvider = ({ children }) => {
  // Cart
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('shiv_shakti_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('shiv_shakti_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Recently Viewed
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState('featured');

  // Toasts
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('shiv_shakti_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shiv_shakti_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Cart operations
  const addToCart = (product, size = 'L', quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, size, quantity }];
    });

    showToast(`Added ${product.name} (Size ${size}) to Cart! ✨`, 'success');
  };

  const removeFromCart = (productId, size) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, size, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed from Wishlist`, 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved to Wishlist ❤️`, 'success');
        return [...prev, product];
      }
    });
  };

  // Recently Viewed tracker
  const trackRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      return [product, ...filtered].slice(0, 6);
    });
  };

  // Total items in cart
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Bundle Pricing Calculation
  const bundleInfo = calculateBundlePricing(totalCartCount);

  return (
    <ShopContext.Provider
      value={{
        products: PRODUCTS,
        cart,
        wishlist,
        recentlyViewed,
        totalCartCount,
        bundleInfo,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isSizeChartOpen,
        setIsSizeChartOpen,
        isSearchOpen,
        setIsSearchOpen,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        selectedSize,
        setSelectedSize,
        selectedColor,
        setSelectedColor,
        maxPrice,
        setMaxPrice,
        sortBy,
        setSortBy,
        toast,
        showToast,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        trackRecentlyViewed
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

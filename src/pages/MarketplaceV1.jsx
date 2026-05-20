import React, { useMemo, useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Aero Sneaker', category: 'Shoes', price: 89, rating: 4.6 },
  { id: 2, name: 'Mono Hoodie', category: 'Apparel', price: 59, rating: 4.4 },
  { id: 3, name: 'Trail Backpack', category: 'Accessories', price: 74, rating: 4.7 },
  { id: 4, name: 'Core Cap', category: 'Accessories', price: 24, rating: 4.2 },
  { id: 5, name: 'Flux Runner', category: 'Shoes', price: 109, rating: 4.8 },
  { id: 6, name: 'Daily Tee', category: 'Apparel', price: 29, rating: 4.3 },
];

const MarketplaceV1Page = () => {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const visibleProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category;
      const queryMatch = product.name.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#1a1d24]">
      <style>{`
        .market-shell { max-width: 1100px; margin: 0 auto; padding: 32px 20px 48px; }
        .market-header { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 28px; }
        .market-logo { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .market-badge { background: #111827; color: #fff; border-radius: 999px; padding: 8px 14px; font-size: 12px; font-weight: 700; }
        .market-toolbar { display: grid; grid-template-columns: 1fr auto; gap: 14px; margin-bottom: 18px; }
        .market-search, .market-btn, .market-card button { border: 1px solid #d8dce4; border-radius: 12px; background: #fff; }
        .market-search { width: 100%; padding: 12px 14px; font-size: 14px; outline: none; }
        .market-filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
        .market-btn { padding: 8px 12px; font-size: 12px; font-weight: 700; cursor: pointer; }
        .market-btn.active { background: #111827; color: #fff; border-color: #111827; }
        .market-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; }
        .market-card { background: #fff; border: 1px solid #d8dce4; border-radius: 16px; padding: 16px; }
        .market-card h3 { margin: 4px 0 10px; font-size: 18px; }
        .market-meta { color: #6b7280; font-size: 12px; margin-bottom: 14px; }
        .market-price { font-size: 20px; font-weight: 800; margin-bottom: 10px; }
        .market-card button { width: 100%; padding: 10px; font-weight: 700; cursor: pointer; }
      `}</style>

      <div className="market-shell">
        <header className="market-header">
          <h1 className="market-logo">Marketplace V1</h1>
          <span className="market-badge">Cart: {cartCount}</span>
        </header>

        <div className="market-toolbar">
          <input
            className="market-search"
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="market-filters">
          {['All', 'Shoes', 'Apparel', 'Accessories'].map((item) => (
            <button
              key={item}
              className={`market-btn ${category === item ? 'active' : ''}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <section className="market-grid">
          {visibleProducts.map((product) => (
            <article className="market-card" key={product.id}>
              <p className="market-meta">{product.category}</p>
              <h3>{product.name}</h3>
              <p className="market-meta">Rating: {product.rating} / 5</p>
              <p className="market-price">${product.price}</p>
              <button
                aria-label={`Add ${product.name} to cart`}
                onClick={() => setCartCount((count) => count + 1)}
              >
                Add to cart
              </button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default MarketplaceV1Page;

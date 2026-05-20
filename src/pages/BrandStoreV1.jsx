import React, { useMemo, useState } from 'react';

const VARIANTS = [
  { name: 'Black', hex: '#111111', stock: 12, price: 129 },
  { name: 'Cream', hex: '#efe8db', stock: 8, price: 129 },
  { name: 'Blue', hex: '#1f3b77', stock: 5, price: 139 },
];

const BrandStoreV1Page = () => {
  const [activeVariant, setActiveVariant] = useState(VARIANTS[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const total = useMemo(() => activeVariant.price * quantity, [activeVariant, quantity]);

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#f3f4f6]">
      <style>{`
        .brand-shell { max-width: 960px; margin: 0 auto; padding: 36px 20px 56px; }
        .brand-nav { display: flex; justify-content: space-between; margin-bottom: 30px; }
        .brand-nav h1 { font-size: 22px; font-weight: 800; letter-spacing: -0.02em; }
        .brand-card { border: 1px solid #2a2f39; border-radius: 18px; background: #151922; padding: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .brand-preview { border-radius: 14px; border: 1px solid #2a2f39; min-height: 280px; background: linear-gradient(140deg, #242a36, #161a22); display: flex; align-items: center; justify-content: center; }
        .brand-circle { width: 120px; height: 120px; border-radius: 999px; border: 6px solid #fff; }
        .brand-swatch-wrap { display: flex; gap: 10px; margin: 14px 0 18px; }
        .brand-swatch { width: 28px; height: 28px; border-radius: 999px; border: 2px solid #fff; cursor: pointer; opacity: 0.7; }
        .brand-swatch.active { outline: 2px solid #6ea8fe; opacity: 1; }
        .brand-price { font-size: 28px; font-weight: 800; margin: 6px 0 8px; }
        .brand-meta { color: #9ca3af; font-size: 13px; margin-bottom: 16px; }
        .brand-qty { display: inline-flex; border: 1px solid #394252; border-radius: 10px; overflow: hidden; margin-bottom: 14px; }
        .brand-qty button { width: 38px; background: #1a202b; color: #fff; border: none; cursor: pointer; font-size: 18px; }
        .brand-qty span { width: 44px; display: inline-flex; align-items: center; justify-content: center; background: #12161f; }
        .brand-cta { width: 100%; border: none; background: #6ea8fe; color: #0b1320; padding: 12px 14px; border-radius: 12px; font-weight: 800; cursor: pointer; }
        .brand-ok { margin-top: 10px; color: #72d88e; font-size: 12px; font-weight: 700; min-height: 16px; }
        @media (max-width: 760px) { .brand-card { grid-template-columns: 1fr; } }
      `}</style>

      <div className="brand-shell">
        <nav className="brand-nav">
          <h1>Brand Store V1</h1>
          <span>STATUS: LIVE</span>
        </nav>

        <main className="brand-card">
          <section className="brand-preview">
            <div className="brand-circle" style={{ borderColor: activeVariant.hex }} />
          </section>

          <section>
            <p className="brand-meta">Signature Product</p>
            <h2 className="text-3xl font-extrabold">Pulse Headphones</h2>
            <p className="brand-price">${total}</p>
            <p className="brand-meta">{activeVariant.name} · In stock: {activeVariant.stock}</p>

            <div className="brand-swatch-wrap">
              {VARIANTS.map((variant) => (
                <button
                  key={variant.name}
                  title={variant.name}
                  className={`brand-swatch ${activeVariant.name === variant.name ? 'active' : ''}`}
                  style={{ background: variant.hex }}
                  onClick={() => setActiveVariant(variant)}
                />
              ))}
            </div>

            <div className="brand-qty">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button className="brand-cta" onClick={addToCart}>
              Add to cart
            </button>
            <p className="brand-ok">{added ? 'Added to cart successfully.' : ''}</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BrandStoreV1Page;

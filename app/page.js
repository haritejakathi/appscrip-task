
"use client";

import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <header>
        <h1>Our Products</h1>
      </header>
      <main>
        <section className="product-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;

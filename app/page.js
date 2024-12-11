
import Head from 'next/head';
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
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Browse our collection of amazing products." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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

      <style jsx>{`
        header {
          text-align: center;
          margin: 20px 0;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .product-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 15px;
          text-align: center;
          transition: transform 0.3s;
        }
        .product-card:hover {
          transform: scale(1.05);
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Home;

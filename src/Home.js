import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      {products.map((product) => (
        <div className="product" key={product._id}>
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;

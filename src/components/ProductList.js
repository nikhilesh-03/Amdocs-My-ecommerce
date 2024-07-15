import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductList.css';

const ProductList = ({ setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    axios.post('http://localhost:3000/cart', product)
      .then(response => {
        // Fetch updated cart data after adding the product
        axios.get('http://localhost:3000/cart')
          .then(cartResponse => {
            setCart(cartResponse.data);
            toast.success(`${product.name} added to cart!`);
          })
          .catch(error => toast.error('Error fetching updated cart: ' + error.message));
      })
      .catch(error => toast.error('Error adding to cart: ' + error.message));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-item" key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ProductList;

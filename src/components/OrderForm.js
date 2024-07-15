import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './OrderForm.css';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { name, product, quantity };

    axios.post('http://localhost:3000/orders', order)
      .then(response => {
        toast.success('Order submitted successfully!');
        setName('');
        setProduct('');
        setQuantity(1);
      })
      .catch(error => toast.error('Error submitting order: ' + error.message));
  };

  return (
    <div>
      <form className="order-form" onSubmit={handleSubmit}>
        <h2>Place Order</h2>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Product Name" value={product} onChange={e => setProduct(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
        <button type="submit">Order</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default OrderForm;

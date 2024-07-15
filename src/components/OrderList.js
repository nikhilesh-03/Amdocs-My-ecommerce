import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="order-list">
      <h2>Orders</h2>
      {orders.map(order => (
        <div className="order-item" key={order.id}>
          <p>Name: {order.name}</p>
          <p>Product: {order.product}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;

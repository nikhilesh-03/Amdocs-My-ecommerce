import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => setCart(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My E-commerce Website</h1>
          <nav>
            <ul>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/place-order">Place Order</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ProductList setCart={setCart} />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/place-order" element={<OrderForm />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

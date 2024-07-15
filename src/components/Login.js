import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        const user = response.data.find(user => user.username === username && user.password === password);
        if (user) {
          setIsAuthenticated(true);
          alert('Login successful!');
        } else {
          alert('Invalid credentials');
        }
        setUsername('');
        setPassword('');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        alert('Error logging in');
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

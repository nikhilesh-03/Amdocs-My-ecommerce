import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post('http://localhost:3000/users', { username, password })
      .then(response => {
        alert('Signup successful!');
        setUsername('');
        setPassword('');
      })
      .catch(error => {
        console.error('Error signing up:', error);
        alert('Error signing up');
      });
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

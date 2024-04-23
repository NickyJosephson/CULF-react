import React, { useState } from 'react';
import './Register.css'; // Import the CSS file

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting naturally
    // Simple validation example
    if (!username || !password) {
      setMessage('Both fields are required!');
    } else {
      setMessage('Login successful!');
      // You can add more logic here for authentication
    }
  };

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{color: 'white'}}>Register</h2>
        {message && <p className="message">{message}</p>}
        <div className="inputGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="input"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
  );
};
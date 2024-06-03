import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import {login} from '../api/Authentication.js'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting naturally
    // Simple validation example
    if (!username || !password) {
      setMessage('Both fields are required!');
    } else {
      login({
        email: username,
        password: password
      })
      setMessage('Login successful!');
    }
  };

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{color: '#ff5047', textAlign: "left"}}>Login</h2>
        {message && <p className="message">{message}</p>}
        <div className="inputGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="input"
            placeholder="Enter Username"
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
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
  );
};
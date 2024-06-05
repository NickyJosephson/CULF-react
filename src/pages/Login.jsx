import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import {login} from '../api/Authentication.js'
import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from 'react-cookie'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [cookies, setCookie] = useCookies(['user'])
  const navigate = useNavigate();
  
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting naturally
    // Simple validation example
    if (!username || !password) {
      setMessage('Both fields are required!');
    } else {
      login({
        email: username,
        password: password
      }).then(async (r) =>{
        if (!r.error){
          if (r.data.status == 200){
            setCookie('jwt', r.data.data.token, { path: '/' })
            setMessage('Login successful!');
            await timeout(1000)
            navigate('/items/view')
          } else {
            setMessage('Login Unsuccessful!');
          }
        }
      })
    }
  };

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{color: '#ff5047', textAlign: "left"}}>Login</h2>
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
        {message && <p style={{'color': 'black'}} className="message">{message}</p>}
        <button type="submit" className="button">Login</button>
      </form>
  );
};
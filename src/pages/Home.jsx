import React from 'react';
import cornellLogo from '../assets/cornell-logo.png'
import "./Home.css";
export default function HomePage() {
    return (
      <div className="container">
        <img src={cornellLogo} alt="Cornell Clocktower" className="clocktower"/>
        <h1 className="title">Welcome to CULF</h1>
        <p className="tagline">Helping you find what you've lost at Cornell.</p>
      </div>
    )
  }
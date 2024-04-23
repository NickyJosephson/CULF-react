import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import ItemsPage from './pages/Items'
import MapPage from './pages/Map'
import ReportPage from './pages/Report'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

import './App.css'
import { Route, Routes, Router } from "react-router-dom"
import React from 'react';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items/view" element={<ItemsPage />} />
        <Route path="/items/report" element={<ReportPage />} />
        <Route path="/items/map" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App

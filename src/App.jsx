import Navbar from './components/Navbar'
import Home from './pages/Home'
import Items from './pages/Items'
import Map from './pages/Map'
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </>
  )
}

export default App

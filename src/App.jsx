import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Menu from './pages/Menu/Menu'
import Product from './pages/Product/Product'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Location from './pages/Location/Location'
import Conditions from './pages/Conditions/Conditions'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'

const App = () => {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/location' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/location' element={<Location />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/conditions' element={<Conditions />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      {location.pathname !== '/location' && <Footer />}
    </div>
  )
}

export default App
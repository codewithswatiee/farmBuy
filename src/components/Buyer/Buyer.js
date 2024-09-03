import React from 'react'
import './Buyer.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ProductsCards from './ProductsCards'
import FarmerCards from './FarmerCards'
function Buyer() {
  return (
    <Router>
        <div className='navBtns'>
            <button><Link to='/'>Products</Link></button>
            <button><Link to='/farmers'>Farmers</Link></button>
        </div>
        <Routes>
            <Route path="/" element={<ProductsCards />} />
            <Route path="/farmers" element={<FarmerCards />} />
        </Routes>
    </Router>
  )
}

export default Buyer

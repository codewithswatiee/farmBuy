import React from 'react'
import Button from '../Button'
import './Product.css'

function Product({name, category, price, stock, imgUrl}) {
    let stockClass = ''
    if(stock === "Out of Stock" ){
        stockClass = 'outOfStock'
    } else if(stock === 'Limited Stock'){
        stockClass = 'limited'
    } else{
        stockClass = 'available'
    }
  return (
    <div>
      <div className='product'>
      <img src={imgUrl} alt="Product" />
      <div className='info'>
        <h2>Name: {name}</h2>
        <h2>Category: {category}</h2>
        <h2>Price: ₹{price}</h2>
        <h2>Availability: <span className={stockClass}>{stock}</span></h2>
      </div>
      {stock==="Out of Stock" ? <Button className='button out'>Sold Out</Button> : <Button className='button'>Buy</Button>}
    </div>
    </div>
  )
}

export default Product

import React from 'react'
import Button from '../Button'
import './Product.css'

function Product({name, category, price, stock, imgUrl}) {
    let stockClass = ''
    if(stock==='Out of Stock'){
        stockClass = 'outOfStock'
    } else{
        stockClass = 'availabe'
    }
  return (
    <div>
      <div className='product'>
      <img src={imgUrl} alt="Product" />
      <div className='info'>
        <h2>Name: {name}</h2>
        <h2>Category: {category}</h2>
        <h2>Price: ₹{price}</h2>
        <h2 className={stockClass}>{stock}</h2>
      </div>
      <Button className='button'>Buy</Button>
    </div>
    </div>
  )
}

export default Product

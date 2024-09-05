import React from 'react'
import './Product.css'

function Product({farm, name, unit, price, stock,description, imgUrl}) {
  return (
    <div className='product-card'>
      <img src='/products.png'></img>
      <h3 className={stock ==='Limited' && 'marginB'}>{name}</h3>
      <p>{description}</p>
      <div className="product-details">
        <span className="product-price">₹{price} /{unit}</span>
        <span className="product-farm">{farm}</span>
      </div>
      {stock ==='Limited' && <p style={{color:'red', fontWeight:500}}>Limited</p>}
      <button className={stock==="Out of Stock"? 'btn out strikethrough' : 'btn'} data-text='Sold Out'>Add to Cart</button>
    </div>
  )}

export default Product

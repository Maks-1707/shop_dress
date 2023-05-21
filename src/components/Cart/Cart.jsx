import React from 'react'
import './Cart.css'
import img from '../../assets/cart/images.jpeg' 

const Cart = () => {
  return (
    <div className="product-item">
  <img src={img} />
  <div className="product-list">
    <h3>Черное платье</h3>
    <span className="price">1999₽</span>
    <a href="" className="button">
      В корзину
    </a>
  </div>
</div>

  )
}

export default Cart
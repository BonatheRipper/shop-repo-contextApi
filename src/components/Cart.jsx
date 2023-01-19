import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()

    const backToShop = () => {
        navigate("/")
    }
  return (
    <div className='cart'>
      <div className='cart-head'>
      <button className='cart-back-btn' onClick={backToShop}>Back to shop</button>
      </div>

        <h1 style={{fontWeight: "500", textAlign: 'center'}}>Your cart is empty</h1>
    </div>
  )
}

export default Cart
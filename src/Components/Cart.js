import React, { useContext } from 'react';
import SingleProduct from './SingleProduct';
import { Cart } from '../Context';
import { useSelector } from 'react-redux'

function CartItem() {
  const { cart } = useContext(Cart)
  const amount = useSelector(state => state.amount)

  return (
    <div>
      <center style={{margin:"1rem 0"}}>
        <h4>Total Item: {cart.length}</h4>
        <h4>Total Price: {amount}</h4>
      </center>
      <div className='productContainer'>
        {cart.map((prod, index) => (
          <SingleProduct prod={prod} key={index} />
        ))}
      </div>
    </div>
  )
}

export default CartItem

import React, { useContext } from 'react';
import { Cart } from '../Context';
import { useSelector } from 'react-redux'

function CartItem() {
  const { cart, setCart } = useContext(Cart)
  const amount = useSelector(state => state.amount)

  return (
    <div>
      <div className='productContainer'>
        <div>
          <div className='cart-title'>sBags ({cart.length})</div>
          {cart.map((prod, index) => (
            <div className='cartItems' key={index} >
              <div>
                <img src={prod.image} style={{ width: "9rem", height: "9rem" }} alt='...' />
              </div>
              <div>
                {prod.title}<br />
                {prod.price}<br />
                <button className="btn btn-light" onClick={() => {
                  setCart(cart.filter((c) => c.price !== prod.price))
                }}>REMOVE</button>
              </div>
            </div>
          ))}
          <div className='place-order'>
            <button className='btn-lg' >Place Order</button>
          </div>
        </div>
        <div className='card cartTotal'>
          <span style={{ color: "gray" }}>Price Details</span>
          <hr />
          <div>
            <div>
              Price ({cart.length} items)<br />
              Delivery Charges
            </div>
            <div>
              {amount}<br />
              <div>Free</div>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <span style={{ fontWeight: "bold" }}>Total Amount</span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>{amount}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem

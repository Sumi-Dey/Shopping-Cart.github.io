import React, { useContext } from 'react';
import { Cart } from '../Context';
import { useSelector } from 'react-redux'

function CartItem() {
  const { cart, setCart } = useContext(Cart)
  const amount = useSelector(state => state.amount)

  return (
    <>
    <div>
      <div className='productContainer'>
        <div>
          {cart.length===0?(<div className='emptycart'>
            <img src='https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038--android.jpg' alt='...'/>
          </div>):
          (cart.map((prod, index) => (
            <div className='cartItems' key={index} >
              <div>
                <img src={prod.images[0]} style={{ width: "9rem", height: "9rem" }} alt='...' />
              </div>
              <div>
                {prod.title}<br />
                {prod.price}/-<br />
                <button className="btn btn-light" style={{backgroundColor:"#EB455F",border:'none', color:"white"}} onClick={() => {
                  setCart(cart.filter((c) => c.id !== prod.id))
                }}>REMOVE</button>
              </div>
            </div>
          )))}
        </div>
        {cart.length===0?<div></div>:<div className=' cartTotal'>
          <span style={{ color: "gray" }}>Price Details</span>
          <hr />
          <div>
            <div>
              Price ({cart.length} items)<br />
              Delivery Charges
            </div>
            <div>
              {amount}<br />
              <div>20</div>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <span style={{ fontWeight: "bold" }}>Total Amount</span>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>{amount+20}</span>
            </div>
          </div>
        </div>}
      </div>
    </div>
    {cart.length===0?<div></div>:<div className='place-order'>
            <button className='btn-lg' style={{backgroundColor:"#473C33",color:'white',width:'28%'}}>Place Order</button>
          </div>}
    </>
  )
}

export default CartItem

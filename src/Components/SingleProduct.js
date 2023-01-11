import React, { useContext, useState } from 'react';
import { Cart } from '../Context';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/Index';


function SingleProducts({ prod }) {
    const { cart,setCart } = useContext(Cart);
    const dispatch = useDispatch();
    const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch)

    const addPrice = () => {
        addToCart(prod.price)
        setCart([...cart,prod])
    }

    const removePrice = () => {
        removeFromCart(prod.price)
        setCart(cart.filter((c) => c.price !== prod.price))
    }
    return (
        <div className='wholecard'>
            <div className="card" style={{ width: "17rem" }}>
                <img src={prod.image} style={{ height: "25rem" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">{prod.title.slice(0, 25)}...</p>
                     <div>
                        <h6 className="card-title">{prod.price}</h6>
                        
                            {cart.includes(prod)?<button to="/" className="btn btn-danger btn-sm" style={{backgroundColor:"#EB455F",border:'none'}} onClick={removePrice}>Remove from cart</button>:
                             <button to="/" className="btn btn-primary btn-sm" style={{backgroundColor:"rgb(251 103 126)",border:'none'}} onClick={addPrice} >Add to Cart</button>}
                             
                            
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SingleProducts;

import React, { useContext } from 'react';
import { Cart } from '../Context';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/Index';
import { Link } from 'react-router-dom';


function SingleProducts({ prod }) {
    const { cart,setCart,setMainProduct } = useContext(Cart);
    const dispatch = useDispatch();
    const { addToCart, removeFromCart } = bindActionCreators(actionCreators, dispatch)
    const addPrice = () => {
        addToCart(prod.id)
        setCart([...cart,prod])
    }

    const removePrice = () => {
        removeFromCart(prod.id)
        setCart(cart.filter((c) => c.id !== prod.id))
    }
    const mainProFunc = ()=>{
        setMainProduct([prod])
    }
    return (
        <div className='wholecard'>
            <div className="card" style={{ width: "17rem" }}>
                <Link to='/mainproduct' ><img src={prod.images[0]} style={{ height: "25rem" }} className="card-img-top" alt="..." 
                onClick={mainProFunc} /></Link>
                <div className="card-body">
                    <h6>{prod.brand}</h6>
                    <p className="card-title">{prod.title.slice(0, 25)}...</p>
                     <div>
                        <h6 className="card-title">{prod.price}/-</h6>                        
                           {cart.includes(prod)?<button to="/" className="btn btn-danger btn-sm" style={{backgroundColor:"#EB455F",border:'none'}} onClick={removePrice}>Remove from cart</button>:
                             <button to="/" className="btn btn-primary btn-sm" style={{backgroundColor:"rgb(251 103 126)",border:'none'}} onClick={addPrice} >Add to Cart</button>}                            
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SingleProducts;

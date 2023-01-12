import React, { useContext } from "react";
import { Cart } from "../Context";
import { AiFillStar } from 'react-icons/ai'


function MainProduct() {
    const { mainProduct,cart,setCart } = useContext(Cart);

    return (
        <div>
            {mainProduct.map((prod, i) => (
                <div key={i} className='mainProduct'>
                    <div className="mainProduct-left">
                        <img src={prod.images[0]} alt='...' />
                    </div>
                    <div className="mainProduct-right">
                        <div>{prod.brand}</div>
                        <div>{prod.title}</div>
                        <div>Special Price</div>
                        <div className="price"><span>&#8377;{prod.price}</span><span>{prod.discountPercentage}% off</span></div>
                        <div className="rating"> <span>{prod.rating}</span><AiFillStar size={15} /></div>
                        <div className="productDetails">
                            <h6>Product Details</h6>
                            <p>{prod.description}</p>
                        </div>
                        <div>
                            {cart.includes(prod)?<button to="/" className="btn btn-danger btn-sm" style={{backgroundColor:"#EB455F",border:'none',padding:'8.9px 30px',fontSize:'16px'}} onClick={()=>setCart(cart.filter((c)=>c.id !== prod.id))} >Remove from Cart</button>:
                            <button to="/" className="btn btn-primary btn-sm" style={{backgroundColor:"rgb(251 103 126)",border:'none',padding:'8.9px 30px',fontSize:'16px'}} onClick={()=>setCart([...cart,prod])} >Add to Cart</button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainProduct;
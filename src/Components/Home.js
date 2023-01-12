import React, { useContext } from 'react';
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';


function Home() {
    const {product} = useContext(Cart);
    return (
        <div className='productContainer'>                
            <div>
                {product.map((prod, index) => (
                    <SingleProduct prod={prod} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Home

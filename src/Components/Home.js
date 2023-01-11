import React, { useContext } from 'react';
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';


function Home() {
    const {Products} = useContext(Cart);
    // const transformProducts = ()=>{
    //     let sortedProducts = Products;
    //     if (sort) {
    //         return sortedProducts.sort((a,b)=>
    //         sort==="lowToHigh"?a.price-b.price:b.price-a.price)
    //     } else {
    //         return sortedProducts
    //     }
    // }
    return (
        <div className='productContainer'>                
            <div>
                {Products.map((prod, index) => (
                    <SingleProduct prod={prod} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Home

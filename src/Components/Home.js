import React, { useState } from 'react';
import { product } from '../Data/Products';
import Filters from './Filters';
import SingleProduct from './SingleProduct';


function Home() {
    const [selected]= useState(product)
    return (
        <div className='productContainer'>                
            <div>
                {selected.map((prod, index) => (
                    <SingleProduct prod={prod} key={index} />
                ))}
            </div>
            <div><Filters /></div>
        </div>
    )
}

export default Home

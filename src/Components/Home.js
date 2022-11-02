import React, { useState } from 'react';
import { product } from '../Data/Products';
import SingleProduct from './SingleProduct';


function Home() {
    const [selected] = useState(product);
    return (
        <div className='productContainer'>
           {selected.map((prod,index)=>(
           <SingleProduct prod={prod} key={index} />
           ))}
        </div>
    )
}

export default Home

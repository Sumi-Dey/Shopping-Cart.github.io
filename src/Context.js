import React, { createContext, useContext, useReducer, useState } from 'react';
import { product } from './Data/Products';
import reducers from './State/Reducers/Index';

export const Cart = createContext();

function Context({children}) {
    const [cart,setCart]= useState([])
    const [state,dispatch] = useReducer( reducers ,{
      Products:product,
      
    })
  return (
    <Cart.Provider value={{...state,dispatch,cart,setCart}}>
        {children}
    </Cart.Provider>
  )
}


export const CartState = () => {
  return useContext(Cart);
};
export default Context

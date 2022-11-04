import React, { createContext, useReducer, useState, useContext } from 'react';
import { productReducer } from './State/Reducers/productReducer';
export const Cart = createContext();

function Context({children}) {
    const[cart,setCart] = useState([])
    const [productState,productDispatch] = useReducer(productReducer,{
      byRating:0,
    })
  return (
    <Cart.Provider value={{cart,setCart,productState,productDispatch}}>
        {children}
    </Cart.Provider>
  )
}


export const CartState = () => {
  return useContext(Cart);
};
export default Context

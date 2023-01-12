import React, { createContext, useContext, useEffect, useState } from 'react';

export const Cart = createContext();

function Context({children}) {
  const [product,setProduct] = useState([])
  const proFunc = async ()=>{
    const res = await fetch('https://dummyjson.com/products/category/womens-bags')
     const resData = await res.json()
     setProduct(resData.products)
  }
  useEffect(()=>{
    proFunc()
  },[])
    const [cart,setCart]= useState([]);
    const [mainProduct,setMainProduct] = useState([]);
    // const [state,dispatch] = useReducer( reducers ,{
    //   Products:product, 
    // })
  return (
    <Cart.Provider value={{cart,setCart,mainProduct,setMainProduct,product,setProduct}}>
        {children}
    </Cart.Provider>
  )
}


export const CartState = () => {
  return useContext(Cart);
};
export default Context

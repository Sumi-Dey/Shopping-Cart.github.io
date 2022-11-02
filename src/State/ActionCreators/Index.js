export const addToCart = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload:amount
        })
    }
}
export const removeFromCart = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'remove',
            payload:amount
        })
    }
}

const amountReducer = (state=0,action)=>{
    if(action.type==='add'){
        return state+action.payload
    }
    else if (action.type==='remove'){
        return state-action.payload
    }
    else{
        return state
    }
}

export default amountReducer;
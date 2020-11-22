const iState = {
    products:[{name: "am", description: "am", price: "1", qty: "1", image: "mm"}],
    login:false
} 


const reducer = (state = iState, action) =>{    
    console.log(action)
    if(action.type === 'LOGIN'){
        let updateState = {...state}
        updateState.login = true
        updateState.user = action.payload
        return updateState
    }

    if(action.type === 'ADD_PRODUCT'){
        let updateState = {...state}
        updateState.products.push(action.payload)
        return updateState
    }
    return state
}


export default reducer;
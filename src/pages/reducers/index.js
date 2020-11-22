const getInitialState = ()=>{
    return {
        products:[],
        login:false
    }
}

const state = JSON.parse(localStorage.getItem("state")) || getInitialState()

const iState = {
    ...state
}


const reducer = (state = iState, action) =>{    
    if(action.type === 'LOGIN'){
        let updateState = {...state}
        updateState.login = true
        updateState.user = action.payload
        localStorage.setItem('state',JSON.stringify(updateState))
        return updateState
    }

    if(action.type === 'ADD_PRODUCT'){
        let updateState = {...state}
        updateState.products.push(action.payload)
        localStorage.setItem('state', JSON.stringify(updateState))
        return updateState
    }

    if(action.type === 'FILTER_BY_PRICE'){
        let updateState = {...state}
        updateState.products.sort((a,b) => (a.price > b.price) ? 1  : -1);
        localStorage.setItem('state', JSON.stringify(updateState))
        return updateState
    }

    if(action.type === 'FILTER_BY_Qty'){
        let updateState = {...state}
        updateState.products.sort((a,b) => (a.qty > b.qty) ? 1  : -1);
        localStorage.setItem('state', JSON.stringify(updateState))
        return updateState
    }

    if(action.type === 'LOGOUT'){
        localStorage.removeItem('state')
        return getInitialState()
    }
    return state
}


export default reducer;
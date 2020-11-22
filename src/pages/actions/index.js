export const login_user = (payload)=>({'type':'LOGIN', payload:payload})
export const addProduct = (payload)=>({'type':'ADD_PRODUCT', payload:payload})
export const searchProduct = (payload)=>({'type':'SEARCH_PRODUCT', payload:payload})
export const logout = ()=>({'type':'LOGOUT'})
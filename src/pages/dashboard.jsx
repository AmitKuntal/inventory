import React from 'react';
import Header from './components/header';
import {AddProduct} from './components/addProduct';
import Products from './components/products';
import Search from './components/search';

export default function Dashboard(props){
    const [show, setShow] =  React.useState(false)
    const [search, setSearch] = React.useState("")
    
    console.log("show",props.products)

    const handleClose = ()=>{
        setShow(false)
    }

    const handleSearch = (query)=>{
        setSearch(query)
    }

    return(
        <div>
            <Header name={props.user.name} logout={props.logout} />
            <AddProduct {...props}  show = {show} handleClose={handleClose} />
            <button onClick={(e)=>setShow(true)}>Add Product</button>
            <input type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search Product"/>
            {props.products && search.length === 0 ? <Products products={props.products} />:<Search products={props.products} query={search} />}
        </div>
    )
}
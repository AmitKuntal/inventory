import React from 'react';
import Header from './components/header';
import {AddProduct} from './components/addProduct';
import Products from './components/products';
import Search from './components/search';

export default function Dashboard(props){
    const [show, setShow] =  React.useState(false)
    const [search, setSearch] = React.useState("")
    
    const handleClose = ()=>{
        setShow(false)
    }

    const handleSearch = (query)=>{
        setSearch(query)
    }

    return(<>
            <Header name={props.user.name} logout={props.logout} />
            <div className="container">
                <div className="control_box">
                    <button className="button fit" onClick={(e)=>setShow(true)}>Add Product</button>
                    <input className="control" type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Search Product"/>
                    <button className="button fit" onClick={(e)=>props.filterBYPrice()}>Filter Product by Price</button>
                    <button className="button fit" onClick={(e)=>props.filterBYQty()}>Filter Product by Qty</button>
                </div>
                <AddProduct {...props}  show = {show} handleClose={handleClose} />
                {props.products && search.length === 0 ? <Products products={props.products} />:<Search products={props.products} query={search} />}                
            </div>
        </>
    )
}
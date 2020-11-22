import React from 'react'
export const AddProduct = (props) => {
    console.log("props", props)
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    const [product, setProduct] = React.useState({})

    const handleName = (name)=>{
        setProduct({...product, name:name})
    }

    const handleDescription = (description)=>{
        setProduct({...product, description:description})
    }

    const handlePrice = (price)=>{
        setProduct({...product, price:price})
    }

    const handleQty = (qty)=>{
        setProduct({...product, qty:qty})
    }

    const handleImage = (image)=>{
        setProduct({...product, image:image})
    }

    
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="add_product">
            <input type="text" className="control" placeholder="Product Name" onChange={(e)=>handleName(e.target.value)}/>
            <input type="text"  className="control" placeholder="Description"  onChange={(e)=>handleDescription(e.target.value)}/>
            <input type="number" className="control" placeholder="Price"  onChange={(e)=>handlePrice(e.target.value)}/>
            <input type="number" className="control" placeholder="qty"  onChange={(e)=>handleQty(e.target.value)}/>
            <input type="text" className="control" placeholder="imageurl"  onChange={(e)=>handleImage(e.target.value)}/>
            <button className="button fit" onClick={()=>props.addProduct(product)}>Add Product</button>
          <button className="button red" onClick={()=>props.handleClose()}>Cancel</button>
          </div>
        </section>
      </div>
    );
  };
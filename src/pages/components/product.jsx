export default function Product(props){
    return(
        <div className="card">
            {props.image && props.image.length>0 ? <img src={props.image} alt="product"/>:null}
            <span>Name :- {props.name}</span>
            <span>Description :- {props.description}</span>
            <span>Price :- {props.price}</span>
            <span>Quantity :- {props.qty}</span>
        </div>
    )
}
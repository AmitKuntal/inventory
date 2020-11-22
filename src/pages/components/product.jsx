export default function Product(props){
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.description}</span>
            <span>{props.price}</span>
            <span>{props.qty}</span>
            <span>{props.image}</span>
        </div>
    )
}
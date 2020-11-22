import Product from './product'

export default function Products(props){
    return(<>
        {props.products.map((product,index)=><Product {...product} key={index+product.name}/>)}
        </>
    )
}
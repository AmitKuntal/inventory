import Products from './products';
export default function Search(props){
    console.log(props)
    let filteredProducts =  find([...props.products], props.query)
    return(
        <>
        <Products products={filteredProducts} />
        </>
    )
}

function find(products, query) {
    let text = query.split(' ');
    return products.filter(function(product) {
      return text.every(function(el) {
        return product.name.indexOf(el) > -1;
      });
    });
  }
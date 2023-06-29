import {useState} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = id => {
        setProducts(products.filter(product => product._id != id));
    }

    return (
    <div>
        <ProductForm products={products} setProducts={setProducts}/>
        <hr/>
        <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
    </div>
    )
}

export default Main
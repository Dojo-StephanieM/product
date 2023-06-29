import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/products/' + id)
        .then( res => {
            navigate("/");
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + id)
        .then( res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    },[])
    return (
    <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={deleteProduct}>delete</button>

    </div>
    )
}

export default OneProduct
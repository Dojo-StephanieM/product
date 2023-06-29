import { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
            setProducts([...products, res.data ])
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Title:</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type='text'/>
            <br/>
            <label>Price:</label>
            <input onChange={(e) => setPrice(e.target.value)} value = {price} name="price" type="number" />
            <br/>
            <label>Description:</label>
            <input  onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text"/> 
            <button>Submit</button>
        </form>
    </div>
    )
}

export default ProductForm
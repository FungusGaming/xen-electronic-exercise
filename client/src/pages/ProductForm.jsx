import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
// import Title from "../../Components/Title";

const ProductForm = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  
  useEffect(() => {
    if(params.method === 'edit' && params.id) {
      axios.get(`${process.env.REACT_APP_API_URL}/product/${params.id}`).then(({ data }) => {
        setName(data.name)
        setPrice(data.price)
        setRating(data.rating)
      })
    }
  }, [params.id, params.method])
  
  const postProduct = () => {
    if(params.method === 'edit' && params.id) {
      axios.put(`${process.env.REACT_APP_API_URL}/product/${params.id}`, { name, price, rating }).then(() => {
        navigate('/admin')
      })
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/product`, { name, price, rating }).then(() => {
        navigate('/admin')
      })
    }
  }
  const method = params.method.charAt(0).toUpperCase() + params.method.slice(1);
  return (
    <div id="add-product-main" className="flex-column p-l">
      {/* <Title title={`${method} Product`} haveBack /> */}
      <div className="custom-input-container mt-l">
        <label className="custom-input-label">Name</label>
        <input className="custom-input" name="name" value={name} onChange={e => setName(e.target.value)} autoComplete="off" />
      </div>
      <div className="custom-input-container mt-l">
        <label className="custom-input-label">Price</label>
        <input className="custom-input" name="price" value={price} onChange={e => setPrice(e.target.value)} autoComplete="off" />
      </div>
      <div className="custom-input-container mt-l">
        <label className="custom-input-label">Rating</label>
        <input className="custom-input" name="rating" value={rating} onChange={e => setRating(e.target.value)} autoComplete="off" />
      </div>
      <button className="mt-l" onClick={postProduct}>{method}</button>
    </div>
  )
}

export default ProductForm
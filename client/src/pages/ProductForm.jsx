import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import BasicLayout from "../layout/BasicLayout";
import Title from "../components/Title";
import API from "../app/api";

const ProductForm = () => {
  const params = useParams();
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  
  useEffect(() => {
    if(params.method === 'edit' && params.id) {
      API.getProductInfo(params.id).then(({ data }) => {
        setName(data.name)
        setPrice(data.price)
        setRating(data.rating)
      })
    }
  }, [params.id, params.method])
  
  const postProduct = () => {
    if(params.method === 'edit' && params.id) {
      API.editProduct({ id: params.id, name, price, rating }).then(() => {
        navigate('/admin')
      })
    } else {
      API.addProduct({ name, price, rating }).then(() => {
        navigate('/admin')
      })
    }
  }
  const method = params.method.charAt(0).toUpperCase() + params.method.slice(1);
  return (
    <>
      <BasicLayout>
        <div id="add-product-main" className="flex-column p-l">
          <Title title={`${method} Product`} haveBack />
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
          <button className="mt-l primary-button" onClick={postProduct}>{method}</button>
        </div>
      </BasicLayout>
    </>
  )
}

export default ProductForm
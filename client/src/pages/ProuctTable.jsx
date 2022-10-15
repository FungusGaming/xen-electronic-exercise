import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Modal from "../components/Modal"
// import Title from "../../Components/Title"

const ProductTable = () => {
  const [products, setProducts] = useState([])
  const [showConfirmDeleteProductModel, setShowConfirmDeleteProductModel] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const getProductList = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/product`).then(({ data }) => {
      setProducts(data)
    })
  }
  const deleteProduct = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/product/${deleteId}`).then(() => {
      setShowConfirmDeleteProductModel(!showConfirmDeleteProductModel)
      getProductList()
    })
  }
  const triggerDeleteProduct = (id) => {
    setDeleteId(id)
    setShowConfirmDeleteProductModel(!showConfirmDeleteProductModel)
  }
  useEffect(() => {
    getProductList()
  }, [])
  return (
    <div className="p-l b-main">
      {/* <Title title="Product Table List" haveBack /> */}
      <Link to="/products/add">Add Product</Link>
      <div id="product-grid-header" className="product-grid b-white mh-l">
        <div className="grid-header p-l">Name</div>
        <div className="grid-header p-l">Rating</div>
        <div className="grid-header p-l">Action</div>
      </div>
      <div id="product-grid-body">
        {products.map((product, i) => (
          <div key={i} className="product-grid b-white mt-m align-center">
            <div className="p-l">{product.name}</div>
            <div className="p-l">{product.rating}</div>
            <div className="p-l">
              <Link to={`/products/edit/${product._id}`}>
                <FontAwesomeIcon className="product-action-button pointer" icon={faEdit} />
              </Link>
              <button className="b-trans ml-m" onClick={() => triggerDeleteProduct(product._id)}>
                <FontAwesomeIcon className="product-action-button pointer" icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      <Modal
        vCenter
        hCenter
        showModal={showConfirmDeleteProductModel}
        bodyClass="p-l"
      >
        <div className="flex-one">Are you sure to delete?</div>
        <div className="flex-row justify-end">
          <button onClick={() => triggerDeleteProduct(0)}>Cancel</button>
          <button className="ml-m" onClick={() => deleteProduct()}>Confirm</button>
        </div>
      </Modal>
    </div>
  )
}

export default ProductTable

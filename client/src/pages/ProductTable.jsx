import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import API from "../app/api"
import Modal from "../components/Modal"
import BasicLayout from "../layout/BasicLayout"

const ProductTable = () => {
  const [products, setProducts] = useState([])
  const [showConfirmDeleteProductModel, setShowConfirmDeleteProductModel] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const getProductList = () => {
    API.getAllProduct().then(({ data }) => {
      setProducts(data)
    })
  }
  const deleteProduct = () => {
    API.deleteProduct(deleteId).then(() => {
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
    <>
      <BasicLayout>
        <div className="p-l">
          <div className="flex-row justify-end">
            {/* TODO search */}
            <Link to="products/add" className="primary-button">Add</Link>
          </div>
          <div id="product-grid-header" className="product-grid product-grid-header mh-l">
            <div className="one-line p-l">Name</div>
            <div className="one-line p-l">Price</div>
            <div className="one-line p-l">Rating</div>
            <div className="one-line p-l">Action</div>
          </div>
          <div id="product-grid-body">
            {products.map((product, i) => (
              <div key={i} className="product-grid product-grid-row mt-m align-center">
                <div className="one-line p-l">{product.name}</div>
                <div className="one-line p-l">{product.price}</div>
                <div className="one-line p-l">{product.rating}</div>
                <div className="ml-m">
                  <Link to={`products/edit/${product._id}`} className="trans-button">
                    <FontAwesomeIcon className="product-action-button pointer" icon={faEdit} />
                  </Link>
                  <button className="trans-button ml-m" onClick={() => triggerDeleteProduct(product._id)}>
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
      </BasicLayout>
    </>
  )
}

export default ProductTable

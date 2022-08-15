import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Footer from '../layout/footer'
import Header from '../layout/header'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const getProductList = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/product`).then(({ data }) => {
      setProducts(data)
    })
  }
  useEffect(() => {
    getProductList()
  }, [])

  return (
    <div id='product-list-main'>
      <Header />
      <div className='p-l'>
        <div className='flex-row space-between'>
          <h1>Product List</h1>
        </div>
        <div className='flex-row flex-wrap'>
          {
            products.map(product => (
              <ProductCard key={product._id} className='mr-m mb-m' product={product} />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductList

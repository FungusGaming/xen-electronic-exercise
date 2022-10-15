import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import API from '../app/api'
import { handleAxiosError } from '../app/function'
import ProductCard from '../components/ProductCard'
import { setMessage } from '../features/message/messageSlice'
import Footer from '../layout/footer'
import Header from '../layout/header'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  const getProductList = () => {
    API.getAllProduct().then(({ data }) => {
      setProducts(data)
    }).catch(err => {
      dispatch(setMessage(handleAxiosError(err)))
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

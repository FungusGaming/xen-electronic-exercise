import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react'
import { useDispatch  } from 'react-redux';
import AppConfig from '../app/config'
import SampleImg from '../assets/img/SampleImage.png'
import { addToCart } from '../features/cart/cartSlice';
import { setMessage } from '../features/message/messageSlice';
const ProductCard = ({ className, product }) => {
  const { name, price } = product
  const dispatch = useDispatch();
  const addItemToCart = useCallback(() => {
    dispatch(addToCart(product))
    dispatch(setMessage('Added to cart!'))
    
  }, [dispatch, product])
  return (
    <div id='product-card' className={`product-card ${className}`}>
      <img id='product-img' className='product-img' src={SampleImg} alt='product img' />
      <div className='product-model-blank'></div>
      <div className='pv-l ph-m flex-row space-between align-center'>
        <div className=''>
          <div id='product-name' className=''>
            <p>{name}</p>
          </div>
          <div id='product-price' className='font-bold'>
            {price && <p>{AppConfig[process.env.REACT_APP_REGION].currency}{price}</p>}
          </div>
        </div>
        <div className='pointer' onClick={addItemToCart}>
          <FontAwesomeIcon icon={faAdd} />
        </div>
      </div>
      
    </div>
  )
};

export default ProductCard

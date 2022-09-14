import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartCount } from '../features/cart/cartSlice'
const Header = () => {
  const count = useSelector(cartCount)
  return (
    <div id='header' className='flex-row space-between align-center'>
      <section className='p-l pointer'>XenElectronic</section>
      <section className='flex-row mr-l'>
        <Link to={'/signin'} className='pr-l'>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to={'/cart'} className='p-relative pointer'>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className='count-badge'>{count}</span>
        </Link>
        
      </section>
    </div>
  )
}

export default Header
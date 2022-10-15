import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { cartCount } from '../features/cart/cartSlice'
import { userRole } from '../features/user/userSlice'
const Header = () => {
  const navigateHome = useCallback(() => {
    navigate('/')
  })
  const navigate = useNavigate();
  const count = useSelector(cartCount)
  const role = useSelector(userRole)
  return (
    <div id='header' className='flex-row space-between align-center'>
      <section className='p-l pointer' onClick={navigateHome}>XenElectronic</section>
      <section className='flex-row mr-l'>
        { role && role === '1' && <Link to={'/admin'} className='pr-l'>
          <FontAwesomeIcon icon={faToolbox} />
        </Link>}
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
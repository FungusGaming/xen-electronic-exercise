import React from 'react'
import PropTypes from 'prop-types'
import Footer from './footer'
import Header from './header'

const BasicLayout = ({ children, className }) => (
  <div id='basic-layout' className={'flex-column flex-one b-main ' + className}>
    <Header />
    <div className='flex-one'>
      { children }
    </div>
    <Footer />
  </div>
)

BasicLayout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
}

export default BasicLayout
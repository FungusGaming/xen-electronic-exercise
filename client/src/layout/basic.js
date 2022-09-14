import React from 'react'
import PropTypes from 'prop-types'
import Footer from './footer'
import Header from './header'

const BasicLayout = ({ children }) => (
  <div id='basic-layout'>
    <Header />
    { children }
    <Footer />
  </div>
)

BasicLayout.propTypes = {
  children: PropTypes.any
}

export default BasicLayout
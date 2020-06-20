import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ children: page }) => {
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
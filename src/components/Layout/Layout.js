import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import styles from '../../sass/components/layout/Layout.module.scss'

const Layout = ({ children: page }) => {
  return (
    <div className={styles.container} id="modal">
      <Header />
      {page}
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
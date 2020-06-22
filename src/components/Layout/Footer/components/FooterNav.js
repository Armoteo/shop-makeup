import React from 'react'
import styles from '../../../../sass/components/elements/FooterNav.module.scss'
import { Link } from 'react-router-dom'

const FooterNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperContent}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <span>
            Lectus magna fringilla urna porttitor rhoncus dolor purus non.
            Semper viverra nam libero justo laoreet sit. Dolor purus non enim
            praesent elementum facilisis leo vel.
          </span>
        </div>
        <div className={styles.information}>
          <h3>Information</h3>
          <Link to="/">About Us</Link>
          <Link to="/">Delivery Information</Link>
          <Link to="/">Privacy policy</Link>
        </div>
        <div className={styles.customerServices}>
          <h3>Customer Services</h3>
          <Link to="/">Contact Us</Link>
          <Link to="/">My Account</Link>
          <Link to="/">Whish List</Link>
        </div>
        <div className={styles.extras}>
          <h3>Extrass</h3>
          <Link to="/">Brands</Link>
          <Link to="/">Special</Link>
          <Link to="/">Sale</Link>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
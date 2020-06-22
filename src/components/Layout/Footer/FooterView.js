import React from 'react'

import styles from '../../../sass/components/layout/Footer.module.scss'
import Copyright from './components/Copyright.js'
import FooterNav from './components/FooterNav'
import FooterInfo from './components/FooterInfo'

const FooterView = () => {
  return (
    <div className={styles.Footer}>
      <FooterInfo />
      <FooterNav />
      <Copyright />
    </div>
  )
}

export default FooterView
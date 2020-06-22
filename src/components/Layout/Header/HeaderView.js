import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../../sass/components/layout/Header.module.scss'
import HeaderMenu from './components/HeaderMenu'
import HeaderNav from './components/HeaderNav'

const HeadeView = ({ menuItem, menuHeader }) => {

  return (
    <div className={styles.Header}>
      <HeaderMenu menuHeader={menuHeader} />
      <HeaderNav menuItem={menuItem} />
    </div>
  )
}

export default HeadeView

HeadeView.propTypes = {
  menuItem: PropTypes.array.isRequired,
  menuHeader: PropTypes.array.isRequired,
};
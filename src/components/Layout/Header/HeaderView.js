import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../../sass/components/layout/Header.module.scss'
import HeaderMenu from './components/HeaderMenu'

const HeadeView = ({ menuItem, menuHeader }) => {
  console.log(menuItem)
  return (
    <div className={styles.Header}>
      <HeaderMenu menuHeader={menuHeader} />
    </div>
  )
}

export default HeadeView

HeadeView.propTypes = {
  menuItem: PropTypes.array.isRequired,
  menuHeader: PropTypes.array.isRequired,
};
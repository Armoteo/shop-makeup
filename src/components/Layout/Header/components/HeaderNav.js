import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../../../sass/components/elements/HeaderNav.module.scss'
import { NavLink } from 'react-router-dom'

const HeaderNav = ({ menuItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperContent}>
        {menuItem.map((item, index) => {
          return <NavLink
            to={item.url}
            key={index}
            activeClassName={styles.active}
          >{item.name}
          </NavLink>
        })}
      </div>
    </div>
  )
}

export default HeaderNav

HeaderNav.propTypes = {
  menuItem: PropTypes.array.isRequired,
};
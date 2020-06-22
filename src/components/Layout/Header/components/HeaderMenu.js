import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from '../../../../sass/components/elements/HeaderMenu.module.scss'
import flame from '../../../../assets/images/flame.png'

const HeaderMenu = ({ menuHeader }) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapperContent}>
        <div className={styles.logo}>
          <img src={flame} alt="flame" />
          <span>Bonfire</span>
        </div>
        <div className={styles.menu}>
          {menuHeader.map((item, index) => {
            if (item.name === 'buy') {
              return <Link
                to={item.url}
                key={index}
              >{item.name}<i className="fas fa-shopping-cart"></i></Link>
            } else {
              return <a href={item.url} key={index}>{item.name}</a>
            }

          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu

HeaderMenu.propTypes = {
  menuHeader: PropTypes.array.isRequired,
};
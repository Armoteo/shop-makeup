import React from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from './components/HeaderMenu'
import HeaderNav from './components/HeaderNav'
import styles from '../../../sass/components/layout/Header.module.scss'

const HeadeView = ({ menuItem, menuHeader, auth, loginFormOpen, openLoginForm, close }) => {

  return (
    <div className={styles.Header}>
      <HeaderMenu
        menuHeader={menuHeader}
        auth={auth}
        loginFormOpen={loginFormOpen}
        openLoginForm={openLoginForm}
        close={close}
      />
      <HeaderNav menuItem={menuItem} />
    </div>
  )
}

export default HeadeView

HeadeView.propTypes = {
  menuItem: PropTypes.array.isRequired,
  menuHeader: PropTypes.array.isRequired,
  auth: PropTypes.bool.isRequired,
  loginFormOpen: PropTypes.bool.isRequired,
  openLoginForm: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
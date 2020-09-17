import React from 'react'
import PropTypes from 'prop-types'
import HeaderMenu from './components/HeaderMenu'
import HeaderNav from './components/HeaderNav'
import styles from '../../../sass/components/layout/Header.module.scss'

const HeadeView = ({
  menuItem, menuHeader, auth,
  loginFormOpen, openLoginForm, errorMessage,
  close, loginForm, handleFormLogin, login,
  signUpForm, signUp, handleFormSignUp, openSignUpForm,
  signUpFormOpen, logout, adminStatus
}) => {

  return (
    <div className={styles.Header}>
      <HeaderMenu
        menuHeader={menuHeader}
        auth={auth}
        loginFormOpen={loginFormOpen}
        openLoginForm={openLoginForm}
        close={close}
        loginForm={loginForm}
        handleFormLogin={handleFormLogin}
        login={login}
        errorMessage={errorMessage}
        signUpForm={signUpForm}
        signUp={signUp}
        handleFormSignUp={handleFormSignUp}
        openSignUpForm={openSignUpForm}
        signUpFormOpen={signUpFormOpen}
        logout={logout}
        adminStatus={adminStatus}
      />
      <HeaderNav menuItem={menuItem} />
    </div>
  )
}

export default HeadeView

HeadeView.defaultProps = {
  adminStatus: false,
}

HeadeView.propTypes = {
  menuItem: PropTypes.array.isRequired,
  menuHeader: PropTypes.array.isRequired,
  auth: PropTypes.bool.isRequired,
  loginFormOpen: PropTypes.bool.isRequired,
  signUpFormOpen: PropTypes.bool.isRequired,
  openLoginForm: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  loginForm: PropTypes.shape({}).isRequired,
  signUpForm: PropTypes.shape({}).isRequired,
  errorMessage: PropTypes.shape({}).isRequired,
  handleFormLogin: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  handleFormSignUp: PropTypes.func.isRequired,
  openSignUpForm: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  adminStatus: PropTypes.bool,
};
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../../../Elements/general/Button'
import ModalLayout from '../../ModalLayout/ModalLayout'
import FormLogin from '../../../Elements/FormLogin/FormLogin'
import styles from '../../../../sass/components/elements/HeaderMenu.module.scss'
import flame from '../../../../assets/images/flame.png'

const HeaderMenu = ({
  menuHeader, auth, close, loginFormOpen, openLoginForm,
  loginForm, handleFormLogin, login }) => {

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
          {!auth && (<Button onClick={openLoginForm} >
            Login
          </Button>)}
          {auth && (<Button>
            Logout
          </Button>)}
        </div>
      </div>
      {loginFormOpen && (
        <ModalLayout close={close}>
          <FormLogin
            loginForm={loginForm}
            onChange={handleFormLogin}
            login={login}
          />
        </ModalLayout>
      )}
    </div>
  )
}

export default HeaderMenu

HeaderMenu.propTypes = {
  menuHeader: PropTypes.array.isRequired,
  auth: PropTypes.bool.isRequired,
  loginFormOpen: PropTypes.bool.isRequired,
  openLoginForm: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  loginForm: PropTypes.shape({}).isRequired,
  handleFormLogin: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};
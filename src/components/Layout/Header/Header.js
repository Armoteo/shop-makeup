import React from 'react'

import HeaderView from './HeaderView'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: [
        {
          key: 'mainPage',
          name: 'Main',
          url: '/'
        },
        {
          key: 'laptops',
          name: 'Laptops & Notebooks',
          url: '/laptops'
        },
        {
          key: 'components',
          name: 'Components',
          url: '/components'
        },
        {
          key: 'tablets',
          name: 'Tablets',
          url: '/tablets'
        },
        {
          key: 'software',
          name: 'Software',
          url: '/software'
        },
        {
          key: 'contact',
          name: 'Contact',
          url: '/contact'
        },
      ],
      menuHeader: [
        {
          key: 'whish',
          name: 'whish list',
          url: '/whish'
        },
        {
          key: 'account',
          name: 'my account',
          url: '/account'
        },
        {
          key: 'buy',
          name: 'buy',
          url: '/buy'
        }
      ],
      auth: false,
      loginFormOpen: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  }

  openLoginForm = () => {
    this.setState({ loginFormOpen: true })
  }

  close = () => {
    this.setState({ loginFormOpen: false })
  }

  handleFormLogin = (event) => {
    this.setState({
      loginForm: {
        ...this.state.loginForm,
        [event.target.name]: event.target.value
      }
    })
  }

  login = () => {

  }

  render() {
    const { menuItem, menuHeader, auth, loginFormOpen, loginForm } = this.state
    return (
      <HeaderView
        menuItem={menuItem}
        menuHeader={menuHeader}
        auth={auth}
        loginFormOpen={loginFormOpen}
        openLoginForm={this.openLoginForm}
        close={this.close}
        loginForm={loginForm}
        handleFormLogin={this.handleFormLogin}
        login={this.login}
      />
    )
  }
}

export default Header
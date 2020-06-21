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
        },

      ]
    }
  }
  render() {
    const { menuItem, menuHeader } = this.state
    return (
      <HeaderView menuItem={menuItem} menuHeader={menuHeader} />
    )
  }
}

export default Header
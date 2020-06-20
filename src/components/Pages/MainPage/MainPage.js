import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../Layout/Layout'
import MainPageView from './MainPageView'

class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <MainPageView />
      </Layout>
    )
  }
}

export default MainPage
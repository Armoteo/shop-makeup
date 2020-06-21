import React from 'react'

import AdminPageView from './AdminPageView'
import Layout from '../../Layout/Layout'

class AdminPage extends React.Component {
  render() {
    return (
      <Layout>
        <AdminPageView />
      </Layout>
    )
  }
}

export default AdminPage
import React from 'react';
import Layout from '../../Layout/Layout'

import styles from '../../../sass/components/pages/NotFound.module.scss'

const NotFound = () => (
  <Layout>
    <div className={styles.container}>
      <h3>Ooops... 404... </h3>
      <h3>SORRY BUT NOT FOUND PAGE!</h3>
    </div>
  </Layout>
);

export default NotFound;
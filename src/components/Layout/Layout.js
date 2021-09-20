import React from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import styles from "../../sass/components/layout/Layout.module.scss";

const Layout = ({ children: page }) => {
  return (
    <div className={styles.layout} id="modal">
      <Header />
      <div className={styles.main}>
        <div className={styles.content}>{page}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

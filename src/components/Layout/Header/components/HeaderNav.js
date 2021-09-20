import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import styles from "../../../../sass/components/elements/HeaderNav.module.scss";

const HeaderNav = ({ menuItem }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperContent}>
        {menuItem.map((item, index) => {
          return (
            <NavLink to={item.url} key={[index, item.name].join("_")} activeClassName={styles.active}>
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderNav;

HeaderNav.propTypes = {
  menuItem: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

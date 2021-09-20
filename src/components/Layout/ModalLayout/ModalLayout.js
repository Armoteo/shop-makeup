import React from "react";
import PropTypes from "prop-types";
import ClientOnlyPortal from "../../Elements/general/ClientOnPortal";
import CloseButton from "../../Elements/general/CloseButton";

import styles from "../../../sass/components/layout/ModalLayout.module.scss";

const ModalLayout = ({ children, close }) => (
  <ClientOnlyPortal selector="#modal">
    <div className={styles.container}>
      <div className={styles.form}>
        <CloseButton click={close} />
        {children}
      </div>
    </div>
  </ClientOnlyPortal>
);

export default ModalLayout;

ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

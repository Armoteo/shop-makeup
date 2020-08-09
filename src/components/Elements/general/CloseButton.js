import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../sass/components/general/CloseButton.module.scss'

const CloseButton = ({ click }) => {
  return (
    <button type="button" onClick={click} className={styles.btnClose}>
      <span
        className={styles.close}
      />
    </button>
  );
};

CloseButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default CloseButton;

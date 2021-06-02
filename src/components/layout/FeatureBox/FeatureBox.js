import React from 'react';
import styles from './FeatureBox.module.scss';
import Icon from '../../common/Icon/Icon';

const FeatureBox = () => (
  <div className={styles.root}>
    <div className={styles.description}>
        <h3>
          <Icon className={styles.icon} name="phone-volume"/> support mon-fri 9:00 19:00
          <Icon className={styles.icon} name="truck"/> free delivery after 350$
          <Icon className={styles.icon} name="money-bill-wave"/> guaranteed money back*
        </h3>
    </div>
  </div>
);

export default FeatureBox;
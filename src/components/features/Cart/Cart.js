import React from 'react';

import styles from './Cart.module.scss';

const Cart = ({cartAmount}) => (
  <div className={styles.root}>
    <p>{cartAmount}</p>
  </div>
);

export default Cart;
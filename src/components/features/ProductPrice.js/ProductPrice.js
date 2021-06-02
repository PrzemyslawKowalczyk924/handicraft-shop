import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPrice.module.scss';
import Icon from '../../common/Icon/Icon';

const ProductPrice = ({icon, cost}) => {
  const [deliveryCost] = useState(30);
  return (
    <div className={styles.component}>
      <Icon name={icon} />
      <span className={styles.description}>
        <strong>Price: {cost} $<br/>
          {cost > 300 ? (
            <strong className={styles.delivery}>Free delivery cost</strong>
          ) : (
            <strong className={styles.delivery}>With delivery: {cost + deliveryCost} $</strong>
          )}
        </strong>
      </span>
    </div>  
  );
};

ProductPrice.propTypes = {
  icon: PropTypes.string,
  cost: PropTypes.number,
};
  
export default ProductPrice;
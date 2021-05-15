import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPrice.scss';
import Icon from '../../common/Icon/Icon';

const ProductPrice = ({icon, cost}) => {
  const [deliveryCost, setDeliveryCost] = useState(30);
  return (
    <div className={styles.component}>
      <Icon name={icon} />
      <span>
        <strong>Price: {cost} zł</strong><br/>
        {cost > 300 ? (
          <strong>Free delivery cost</strong>
        ) : (
          <strong>Delivery: {cost + deliveryCost} zł</strong>
        )}
      </span>
    </div>  
  );
};

ProductPrice.propTypes = {
  icon: PropTypes.string,
  cost: PropTypes.number,
};
  
export default ProductPrice;
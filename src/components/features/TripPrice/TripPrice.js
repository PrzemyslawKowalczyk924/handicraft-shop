import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripPrice.scss';
import Icon from '../../common/Icon/Icon';

const TripPrice = ({icon, cost}) => {
  return (
    <div className={styles.component}>
      <Icon name={icon} />
      <span>
        <strong>Price: {cost}</strong>
      </span>
    </div>  
  );
};

TripPrice.propTypes = {
  icon: PropTypes.string,
  cost: PropTypes.number,
};
  
export default TripPrice;
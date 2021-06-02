import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';
import Button from '@material-ui/core/Button';
import Icon from '../../common/Icon/Icon';

const Hero = () => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.img} src={"https://images.pexels.com/photos/157879/gift-jeans-fashion-pack-157879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt='wooden surface' />
      <div className={styles.description}>
        <h1>
          handicraft shop
        </h1>
        <h3>Check our selfmade products from our artists</h3>
      </div>
      <div className={styles.buttons}>
        <Button variant="contained" className={styles.button}><Icon name="paper-plane"/> Add your product</Button>
      </div>
    </div>
  </div>
);

/* Hero.propTypes = {
  
}; */

export default Hero;
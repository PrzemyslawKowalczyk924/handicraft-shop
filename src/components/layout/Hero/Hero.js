import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';
import Button from '../../common/Button/Button';

const Hero = ({ image, name }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.img} src={"https://images.pexels.com/photos/157879/gift-jeans-fashion-pack-157879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={name} />
      <div className={styles.description}>
        <h1>
          handicraft shop
        </h1>
        <h3>Check our selfmade products made for culture</h3>
      </div>
      <div className={styles.buttons}>
        <Button variant='main-light'>ABOUT US</Button>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Hero;
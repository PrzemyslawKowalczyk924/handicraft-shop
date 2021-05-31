import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';

import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '../../common/Icon/Icon';

const Header = ({/* user, setOnline, setOffline, */ cartAmount, productsInCart}) => {

  const totalPrice = productsInCart => {
    if (productsInCart.length > 0) {
      const mapByPrice = productsInCart.map(
        product =>
          product.quantity = (product.quantity === undefined ? 1 : product.quantity)
      );
      return mapByPrice.reduce((prev, next) => prev + next);
    }
  };

  return (
    <div className={styles.root}>
      <Grid className={styles.container}>
        <Row between="md" middle="xs">
          <Col md={3} lg={2}>
            <Link to='/'>
              <div className={styles.logo}>
                <Icon name='paper-plane' />
                <span className={styles.name}>handicraft shop</span>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <nav>
              {/* user.status ? */ <NavLink to='/post/add' activeClassName='active'>Add Post</NavLink> /* : null */ }
              {/* user.status ? */ <NavLink to='/post' activeClassName='active'>My Post&apos;s</NavLink> /* : null */ }
              {/* user.status ? */ <NavLink to='/post' activeClassName='active' /* onClick={() => setOffline(false)} */>Logout</NavLink> /* : null */ }
              {/* !user.status ? */ <NavLink to='/auth/google' activeClassName='active' /* onClick={() => setOnline(true)} */>Login with Google</NavLink> /* : null */ }
              {<NavLink to='/cart' >
                <div className={styles.cart}><Icon className={styles.icon} name='shopping-cart' />{productsInCart.length === 0 ? 0 : totalPrice(productsInCart)}</div>
              </NavLink>}
            </nav>
          </Col>
        </Row>
      </Grid>
    </div>
  );  
};

Header.propTypes = {
  user: PropTypes.object,
  setOnline: PropTypes.func,
  setOffline: PropTypes.func,
  cartAmount: PropTypes.number,
};

/* const mapStateToProps = state => ({
  user: getUserInfo(state),
});

const mapDispatchToProps = dispatch => ({
  setOnline: () => dispatch(setUserOnline()),
  setOffline: () => dispatch(setUserOffline()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component); */

export default Header;

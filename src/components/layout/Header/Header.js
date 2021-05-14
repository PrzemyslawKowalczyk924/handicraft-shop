import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { getUserInfo, setUserOnline, setUserOffline } from '../../../redux/userRedux.js';

import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '../../common/Icon/Icon';

const Component = ({user, setOnline, setOffline}) => {

  return (
    <div className={styles.root}>
      <Grid>
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
              {/* user.status ? */ <NavLink to='/post' activeClassName='active' onClick={() => setOffline(false)}>Logout</NavLink> /* : null */ }
              {/* !user.status ? */ <NavLink to='/auth/google' activeClassName='active' onClick={() => setOnline(true)}>Login with Google</NavLink> /* : null */ }
            </nav>
          </Col>
        </Row>
      </Grid>{/*  */}
    </div>
  );  
};

Component.propTypes = {
  user: PropTypes.object,
  setOnline: PropTypes.func,
  setOffline: PropTypes.func,
};

/* const mapStateToProps = state => ({
  user: getUserInfo(state),
});

const mapDispatchToProps = dispatch => ({
  setOnline: () => dispatch(setUserOnline()),
  setOffline: () => dispatch(setUserOffline()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component); */

export {
  Component as Header,
  //Container as Header,
  Component as HeaderComponent,
};

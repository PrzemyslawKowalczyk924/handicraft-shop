import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostsSummary from '../PostsSummary/PostsSummaryContainer';

//import clsx from 'clsx';

import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';

/* import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row, Col} from 'react-flexbox-grid'; */

const Homepage = ( {products, fetchPublishedPosts } ) => {
  
  /* useEffect(() => {
    fetchPublishedPosts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */
  
  return(
    <div className={styles.root}>
      {products.length ? products.map(product => (
        <Paper elevation={3} className={styles.paper}>  
          <PostsSummary key={product.id} {...product} />
        </Paper>  
      )) : (
        <p>Sorry, no results found. Try adjusting the filters.</p>
      )}
    </div>
  )
  
};

Homepage.propTypes = {
  product: PropTypes.array,
};

export default Homepage;

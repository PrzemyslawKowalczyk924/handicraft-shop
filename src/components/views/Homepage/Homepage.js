import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostsSummary from '../PostsSummary/PostsSummaryContainer';

import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';

const Homepage = ( {products, fetchPublishedPosts } ) => {
  
  useEffect(() => {
    fetchPublishedPosts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return(
    <div className={styles.root}>
      {products.length ? products.map(product => (
        <Paper key={product._id} elevation={3} className={styles.paper}>  
          <PostsSummary key={product._id} {...product} />
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

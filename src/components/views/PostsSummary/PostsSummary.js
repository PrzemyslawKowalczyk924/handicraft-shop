import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PostsSummary.module.scss';
import {Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import ProductPrice from '../../features/ProductPrice.js/ProductPrice';

const PostsSummary = ({id, author, price, photo, title, created}) => (
  <Col xs={12} sm={12} lg={12} className={styles.column}>
    <Link to={`/post/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={photo} alt={'some view'} />
        <h3 className={styles.title}>{title}</h3>
        {/* <h2 className={styles.author}>{author}</h2> */}
        <div className={styles.details}>
          <ProductPrice cost={price} icon=''  />
        </div>
      </article>
    </Link>  
  </Col>
);

PostsSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  photo: PropTypes.string,
  created: PropTypes.string,
};

export default PostsSummary;

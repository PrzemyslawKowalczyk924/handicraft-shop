import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsSummary.module.scss';
import {Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
//import TripPrice from '../../features/TripPrice';

const PostsSummary = ({_id, author, photo, title, created}) => (
  <Col xs={12} sm={12} lg={12} className={styles.column}>
    <Link to={`/post/${_id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={photo} alt={'some view'} />
        <h3 className={styles.title}>{title}</h3>
        <h2 className={styles.author}>{author}</h2>
        <div className={styles.details}>
          <span>{created}</span>
          {/* <TripPrice cost={cost} icon=''  /> */}
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

import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsSummary.module.scss';
import {Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
import ProductPrice from '../../features/ProductPrice.js/ProductPrice';
import Button from '@material-ui/core/Button';
import Icon from '../../common/Icon/Icon';

const PostsSummary = ({_id, price, photo, title, addProduct, productsInCart}) => {

  const addToCart = event => {
    event.preventDefault();
    
    addProduct({ _id, price, title, photo });
    
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || productsInCart;
    if(cartProducts && cartProducts.indexOf(_id) !== -1) return false;
    cartProducts.push({ _id, price, title, photo });
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }
  
  return(
    <Col xs={12} sm={12} lg={12} className={styles.root}>
        <article className={styles.component}>
      <Link to={`/post/${_id}`} className={styles.link}>
          <img src={photo} alt={'some view'} />
      </Link>
          <h3 className={styles.title}>{title}</h3>
          {/* <h2 className={styles.author}>{author}</h2> */}
          <div className={styles.details}>
            <ProductPrice cost={price} icon=''  />
          </div>
          <div className={styles.buttons}>
          <Link to={`/post/${_id}`} className={styles.buttonLink}>
            <Button variant="contained" className={styles.button}><Icon name="eye"/> Quick View</Button>
          </Link>
            <Button className={styles.button} variant="contained" onClick={(event) => addToCart(event)}><Icon name="shopping-basket" /> Add to Cart</Button>
          </div>
        </article>
    </Col>
  )
  
};

PostsSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  photo: PropTypes.string,
  created: PropTypes.string,
};

export default PostsSummary;

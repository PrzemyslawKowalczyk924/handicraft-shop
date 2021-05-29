import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HTMLParser from 'react-html-parser';
import {Link} from 'react-router-dom';

import styles from './Post.module.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import ProductPrice from '../../features/ProductPrice.js/ProductPrice';
import shortid from 'shortid';

import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import Icon from '../../common/Icon/Icon';

const Post = ({getProductById, addProduct, product,
  _id, user, title, photo, text, author, price, addres, status, phone, created, updated, email, changeAmount }) => {
    
  const [quantity, setQuantity] = useState(0);
  console.log('true value!!', quantity);
  useEffect(() => {
    getProductById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToCart = event => {
    event.preventDefault();
    
    addProduct({ _id, price, title, quantity, photo, ...Post });
    console.log("addProduct");
  }

  const changeQuantity = (_id, type) => {
    changeAmount({ _id, type });
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    if(quantity <= 0) {
      return setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    };
  };

  const finalAmount = product => {
    if (product.quantity === undefined) {
      return 1;
    } else if (product.quantity < 0) {
      return 0;
    } else {
      return product.quantity;
    }
  };

  const finalPrice = product => {
   /*  if (product.quantity === undefined) {
      return product.price;
    } else if (product.quantity < 0) {
      return 0;
    } else {
      return product.quantity * product.price;
    } */
    return product.price * quantity;
  };

  return (
    <div className={styles.root}>
      <Grid>
        <Row>
          <Col className={styles.pageTitle} sm={12} md={6} lg={6}>
            <h1 className={styles.pageTitle} >{title}</h1>
          </Col>
          <Col className={styles.actualPrice} sm={12} md={6} lg={3}>
            <td>
              <span className='price-currency-symbol'>$ </span>
              Cost: {price}
            </td>
          </Col>
          <Col className={styles.price} sm={12} md={6} lg={3}>
            <ProductPrice icon={'money-bill-wave'} cost={finalPrice(product)}/>
              <tbody>
                <tr key={_id} className={styles.theadItem}>
                  <td className={styles.quantity}>
                    <Button
                      variant='product'
                      className={styles.buttonQty}
                      onClick={() => minusQuantity()}
                    >
                      <Icon name="minus" />
                    </Button>
                    <input
                      className={styles.inputNumber}
                      type='text'
                      min='0'
                      value={quantity}
                      onChange={event => setQuantity(event.currentTarget.value)}
                    />
                    <Button
                      variant='product'
                      className={styles.buttonQty}
                      onClick={() => plusQuantity()}
                    >
                      <Icon name="plus" />
                    </Button>
                  </td>
                </tr>
              </tbody>
              <div className={styles.buttons}>
                <button className={styles.button} variant="contained" onClick={(event) => addToCart(event)}><Icon name="shopping-basket" /> Add to Cart</button>
              </div>
          </Col>
        </Row>
          <DetailsBox>
            <Row className={styles.row}>
              <Col sm={12} md={6} lg={6}>
                <DetailsImage>
                  <SideImage source={photo} />
                </DetailsImage>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col sm={12} md={6} lg={6}>
                
                  <Col md={12} lg={8}>
                    
                    <div className={styles.intro}>
                      {HTMLParser(text)}
                    </div>
                    <List variant='light'>
                      <ListItem title={'<strong>Author:</strong>' + author} icon={'user'} />
                      <ListItem title={status} icon={'spinner'} />
                      <ListItem title={email} icon={'envelope-square'} />
                      <ListItem title={'Country' + addres} icon={'globe-europe'} />
                      <ListItem title={'Phone' + phone} icon={'phone'} />
                      <ListItem title={'<strong>Published:</strong>' + created} icon={'calendar-alt'} created={created} />
                      <ListItem title={'<strong>Last update:</strong>' + updated} icon={'edit'} updated={updated} />
                      {/* user.status ? */ <Link to={`/post/${_id}/edit`} className={styles.link}>
                        <Icon name={'cog'}/><strong>Edytuj Produkt</strong>
                      </Link> /* : null */}
                    </List>
                  </Col>
              </Col>
            </Row>
          </DetailsBox>
        
      </Grid>
      
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  user: PropTypes.object,
};

export default Post;

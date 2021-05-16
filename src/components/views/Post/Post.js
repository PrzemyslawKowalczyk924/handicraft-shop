import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HTMLParser from 'react-html-parser';
import {Link} from 'react-router-dom';

import styles from './Post.module.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import ProductPrice from '../../features/ProductPrice.js/ProductPrice';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import Icon from '../../common/Icon/Icon';

const Post = ({/* getProductById, */ 
  id, user, title, photo, text, author, price, location, status, phone, created, updated, email }) => {

 /*  useEffect(() => {
    getProductById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) */

  return (
    <div className={styles.root}>
      <Grid>
        <Row>
          <PageTitle text={title} />
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
                
                  <Col md={12} lg={4}>
                    
                    <div className={styles.intro}>
                      {HTMLParser(text)}
                    </div>
                    <List variant='light'>
                      <ListItem title={'<strong>Published:</strong>'} icon={'calendar-alt'} created={created} />
                      <ListItem title={'<strong>Last update:</strong>'} icon={'edit'} updated={updated} />
                      <ListItem title={'<strong>Author:</strong>' + author} icon={'user'} />
                      <ListItem title={status} icon={'spinner'} />
                      <ListItem title={email} icon={'envelope-square'} />
                      <ListItem title={'Country' + location} icon={'globe-europe'} />
                      <ListItem title={'Phone' + phone} icon={'phone'} />
                      <ProductPrice icon={'money-bill-wave'} cost={price}/>
                      {/* user.status ? */ <Link to={`/post/${id}/edit`} className={styles.link}>
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

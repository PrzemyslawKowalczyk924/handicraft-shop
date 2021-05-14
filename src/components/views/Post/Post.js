import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HTMLParser from 'react-html-parser';
import {Link} from 'react-router-dom';

import styles from './Post.module.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import TripPrice from '../../features/TripPrice/TripPrice';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import Icon from '../../common/Icon/Icon';

const Post = ({getPostById, 
  _id, user, title, photo, text, author, price, location, status, phone, created, updated, email }) => {

  useEffect(() => {
    getPostById();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.root}>
      <Grid>
        <PageTitle text={title} />
      </Grid>
      <DetailsBox>
        <DetailsImage>
          <SideImage source={photo} />
        </DetailsImage>
        <Grid>
          <Row>
          {user.status ? <Link to={`/post/${_id}/edit`} className={styles.link}>
              <Icon name={'cog'}/>
            </Link> : null}
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
                <TripPrice icon={'money-bill-wave'} cost={price}/>
              </List>
            </Col>
          </Row>
        </Grid>
      </DetailsBox>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  user: PropTypes.object,
};

export default Post;

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import shortid from 'shortid';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';

import styles from './Payment.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

const Payment = ({productsInCart, removeProduct, changeAmount, amountOfProductsInCart}) => {
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      let post = ({
        _id: shortid(),
        title: titleInput,
        //photo: photoInput,
        text: textInput,
        price: priceInput,
        email: emailInput,
        author: authorInput,
        location: locationInput,   
        phone: phoneInput,
      });
      //addPost(post);
    }
  
  
    const [titleInput, setTitleInput] = useState('');
    const [textInput, setTextInput] = useState('');
    const [priceInput, setPriceInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [authorInput, setAuthorInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
  
    return (
      <div className={styles.root}>
        <form className={styles.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
          <Grid>
            <PageTitle text={'Payment'} />
            <div>
            </div>
          </Grid>
          <DetailsBox>
            <DetailsImage>
              <input name="photo" accept="image/*" className={styles.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              <SideImage source={'https://images.unsplash.com/photo-1620295094360-bbed482aaaf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} />
            </DetailsImage>
            <Grid>
              <Row>
                <Col md={12} lg={6}>
                    <TextField className={styles.textField} id="outlined-basic" label="Main title" variant="outlined" type="text" value={titleInput} onChange={(event) => setTitleInput(event.target.value)}/>
                  <div className={styles.intro}>
                    <TextField className={styles.description} id="outlined-multiline-static" label="Description" variant="outlined" multiline rows={5}  type="text" value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
                  </div>
                    <TextField className={styles.textField} id="outlined-basic" label="Author" variant="outlined" type="text" value={authorInput} onChange={(event) => setAuthorInput(event.target.value)}/>
                    <TextField className={styles.textField} id="outlined-basic" label="Email" variant="outlined" type="email" value ={emailInput} onChange={(event) => setEmailInput(event.target.value)}/>
                    <TextField className={styles.textField} id="outlined-basic" label="Location" variant="outlined" type="text" value={locationInput} onChange={(event) => setLocationInput(event.target.value)}/>
                    <TextField className={styles.textField} id="outlined-basic" label="Price" variant="outlined" type="number" value={priceInput} onChange={(event) => setPriceInput(event.target.value)}/>
                    <TextField className={styles.textField} id="outlined-basic" label="Phone" variant="outlined" type="tel" value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)}/>
                </Col>
              </Row>
            </Grid>
          </DetailsBox>
          <Button className={styles.button} type="submit" variant="contained">Add Post</Button>
        </form>
      </div>
    );
    
  }

  Payment.propTypes = {
    addPost: PropTypes.func,
  };
  
export default Payment;
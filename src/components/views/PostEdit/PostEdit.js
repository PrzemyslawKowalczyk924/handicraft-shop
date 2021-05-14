import React, { useState, /* useEffect */ } from 'react';
/* import PropTypes from 'prop-types'; */
import {Grid, Row, Col} from 'react-flexbox-grid';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';

import styles from './PostEdit.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

const PostEdit = ({getPostById, editPost, _id, title, photo, text, author, price, phone, location, status, created, updated, email}) => {
//debugger;

/* useEffect(() => {
  getPostById();
  //eslint-disable-next-line react-hooks/exhaustive-deps
}, []) */

//this useEffect will work always when [_id] parameter is on
/* useEffect(() => {
  setTitleInput(title);
  setPhotoInput(photo);
  setTextInput(text);
  setPriceInput(price);
  setLocationInput(location);
  setAuthorInput(author);
  setPhoneInput(phone);
  setEmailInput(email);
}, [_id]); */

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      _id: _id,
      title: titleInput,
      photo: photoInput,
      text: textInput,
      price: priceInput,
      /* status: ,
      created: ,
      updated: , */
      email: emailInput,
      author: authorInput,
      location: locationInput,   
      phone: phoneInput,
    }
    editPost(post);
    console.log('warrning', event);
  }

  const [titleInput, setTitleInput] = useState(title);
  const [photoInput, /* setPhotoInput */] = useState(photo);
  const [textInput, setTextInput] = useState(text);
  const [priceInput, setPriceInput] = useState(price);
  const [locationInput, setLocationInput] = useState(location);
  const [authorInput, setAuthorInput] = useState(author);
  const [phoneInput, setPhoneInput] = useState(phone);
  const [emailInput, setEmailInput] = useState(email);
  
  return (
    <div className={styles.root}>
      <form className={styles.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
        <Grid>
          <PageTitle text={'Edit Your Post'} />
          <div>
          </div>
        </Grid>
        <DetailsBox>
          <DetailsImage>
            {/* <input accept="image/*" className={styles.input} id="icon-button-file" type="file" value={photoInput} onChange={(event) => setPhotoInput(event.target.value)} /> */}
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <SideImage source={photo} />
          </DetailsImage>
          <Grid>
            <Row>
              <Col md={12} lg={6}>
                  <TextField className={styles.textField} id="outlined-basic" label="Main title" variant="outlined" type="text" value={titleInput} onChange={(event) => setTitleInput(event.target.value)}/>
                <div className={styles.intro}>
                  <TextField className={styles.textField} id="outlined-multiline-static" label="Description" variant="outlined" multiline rows={5} type="text" value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
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
  
};

PostEdit.propTypes = {
};

export default PostEdit;
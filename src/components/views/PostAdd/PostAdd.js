import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import shortid from 'shortid';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';

import styles from './PostAdd.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


const PostAdd = ({ addPost }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let post = ({
      _id: shortid(),
      title: titleInput,
      photo: photoInput,
      text: textInput,
      price: priceInput,
      status: 'published',
      email: emailInput,
      author: authorInput,
      location: locationInput,
      phone: phoneInput,
    });
    addPost(post);
  }

  const imgInp = {};
  const blah = {};
  imgInp.onchange = () => {
    const [file] = imgInp.files;
    if (file) {
      blah.src = URL.createObjectURL(file);
      console.log(blah);
    }
  }
  
  const [titleInput, setTitleInput] = useState('');
  const [photoInput, setPhotoInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  //previev uploaded img
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0])
}

  return (
    <div className={styles.root}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} >
        <Grid>
          <DetailsBox>
            <DetailsImage>
              {/* <input name="photo" accept="image/*" className={styles.input} id="imgInp" type="file" value={photoInput} onChange={(event) => setPhotoInput(event.target.value)} /> */}
              <input name="photo" accept="image/*" className={styles.input} id="imgInp" type="file" value={photoInput} onChange={onSelectFile} />
              {selectedFile &&  <img src={preview} /> }
              <label id="imgInp" htmlFor="imgInp">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
              {/* <SideImage source={} /> */}
              <img id="blah" src="*" alt="your image" />
            </DetailsImage>
            <Grid>
              <Row>
                <Col md={12} lg={6}>
                  <PageTitle text={'Add New Post'} />
                  <TextField className={styles.textField} id="outlined-basic" label="Main title" variant="outlined" type="text" value={titleInput} onChange={(event) => setTitleInput(event.target.value)} />
                  <div className={styles.intro}>
                    <TextField className={styles.description} id="outlined-multiline-static" label="Description" variant="outlined" multiline rows={5} type="text" value={textInput} onChange={(event) => setTextInput(event.target.value)} />
                  </div>
                  <TextField className={styles.textField} id="outlined-basic" label="Author" variant="outlined" type="text" value={authorInput} onChange={(event) => setAuthorInput(event.target.value)} />
                  <TextField className={styles.textField} id="outlined-basic" label="Email" variant="outlined" type="email" value={emailInput} onChange={(event) => setEmailInput(event.target.value)} />
                  <TextField className={styles.textField} id="outlined-basic" label="Location" variant="outlined" type="text" value={locationInput} onChange={(event) => setLocationInput(event.target.value)} />
                  <TextField className={styles.textField} id="outlined-basic" label="Price" variant="outlined" type="number" value={priceInput} onChange={(event) => setPriceInput(event.target.value)} />
                  <TextField className={styles.textField} id="outlined-basic" label="Phone" variant="outlined" type="tel" value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)} />
                </Col>
              </Row>
            </Grid>
          </DetailsBox>
          <Button className={styles.button} type="submit" variant="contained">Add Post</Button>
        </Grid>
      </form>
    </div>
  );
};

PostAdd.propTypes = {
  addPost: PropTypes.func,
};

export default PostAdd;
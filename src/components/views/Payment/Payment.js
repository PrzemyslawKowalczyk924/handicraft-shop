import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import shortid from 'shortid';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';

import styles from './Payment.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const Payment = ({ addToCartRequest, productsInCart }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let order = ({
      _id: shortid(),
      chossenProducts: allProducts,
      price: priceInput,
      email: emailInput,
      author: authorInput,
      location: locationInput,   
      phone: phoneInput,
    });
    console.log(order);
    if(order.author.length == 0 || order.email.length == 0 || order.location.length == 0 || order.phone.length == 0) {
      alert('Fill all empty fields please');
    } else {
      addToCartRequest(order);
      alert('Your order have been send!');
    }
  }
  
  const finalPrice = product => {
    if (product.quantity === undefined) {
      return product.price;
    } else if (product.quantity < 0) {
      return 0;
    } else {
      return product.quantity * product.price;
    }
  };

  const totalPrice = products => {
    if (products.length > 0) {
      const mapByPrice = products.map(
        product =>
          product.price * (product.quantity === undefined ? 1 : product.quantity)
      );
      return mapByPrice.reduce((prev, next) => prev + next);
    }
  };

  const [priceInput, setPriceInput] = useState(totalPrice(productsInCart));
  const [locationInput, setLocationInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [allProducts] = useState(productsInCart);
  
  return (
    <div className={styles.root}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} >
        <Grid>
          <PageTitle text={'Payment'} />
          <div>
          </div>
        </Grid>
        <DetailsBox>
          <Grid>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <Paper className={styles.paper} elevation={3}>
                  <table className={styles.table}>
                    <tbody className={styles.tbody}>
                      <tr className={styles.theadItem}>
                        <th scope='col'>Total cost</th>
                        <td className={styles.totalPrice}>
                        <Paper>
                          <span>$ </span>
                          {totalPrice(productsInCart)}
                        </Paper>  
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      {productsInCart.map((product, id) => (
                        <tr key={id} className={styles.theadItem}>
                          <td>
                            <p>{id + 1}</p>
                          </td>
                          <td>
                            <img
                              className={styles.productImage}
                              src={product.photo}
                              alt=''
                            ></img>
                          </td>
                          <td>{product.title}</td>
                          {/*  <td>
                            <span className='price-currency-symbol'>$ </span>
                            {product.price}
                          </td> */}
                          <td>
                            <span className='price-currency-symbol'>$ </span>
                            {finalPrice(product)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Paper>
              </Col>
              <Col className={styles.inputBox} md={12} lg={6}>
                  <TextField className={styles.textField} id="outlined-basic" label="Author" variant="outlined" type="text" value={authorInput} onChange={(event) => setAuthorInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Email" variant="outlined" type="email" value ={emailInput} onChange={(event) => setEmailInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Location" variant="outlined" type="text" value={locationInput} onChange={(event) => setLocationInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Phone" variant="outlined" type="tel" value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)}/>
                  <Col className={styles.sendButton} md={12} lg={6}>
                    <Button className={styles.button} type="submit" variant="contained">MAKE PAYMENT</Button>
                  </Col>
              </Col>
            </Row>
          </Grid>
        </DetailsBox>
      </form>
    </div>
  );
}

Payment.propTypes = {
  addToCartRequest: PropTypes.func,
};
  
export default Payment;
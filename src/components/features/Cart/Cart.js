import React, { useState } from 'react';
import styles from './Cart.module.scss';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import {Link} from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Cart = ({productsInCart, removeProduct, leaveComment, changeAmount}) => {

  const [setValue] = useState(0);
  const [isActive, setActive] = useState(false);

  const removeFromCart = _id => {
    removeProduct({ _id });
  };

  const leaveCommentInput = (_id, comment) => {
    leaveComment({ _id, comment });
  };

  const changeQuantity = (_id, type) => {
    changeAmount({ _id, type });
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

  const activeComment = (event, _id) => {
    event.preventDefault();

    productsInCart.forEach(product =>  
      {if(product._id === _id) {
        setActive(!isActive);
      }}
    )
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row align-items-center ${styles.header}`}>
          <div className={`col text-left ${styles.cart}`}>
            <p className={styles.title}>Cart</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='table1'>
          <table className='table'>
            <thead className={styles.thead}>
              <tr className={styles.theadItem}>
                <th scope='col' className={styles.item1}>
                  &nbsp;
                </th>
                <th scope='col' className={styles.item2}>
                  &nbsp;
                </th>
                <th scope='col' className={styles.item3}>
                  Product
                </th>
                <th scope='col' className={styles.item0}>
                  Comment
                </th>
                <th scope='col' className={styles.item4}>
                  Price
                </th>
                <th scope='col' className={styles.item5}>
                  Quantity
                </th>
                <th scope='col' className={styles.item6}>
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {productsInCart.map((product, _id) => (
                <tr key={_id} className={styles.theadItem}>
                  <th scope='row'>
                    <Button
                      className={styles.productRemover}
                      onClick={() => removeFromCart(product._id)}
                    >
                      <Icon name="times-circle" />
                    </Button>
                  </th>
                  <td>
                    <img
                      className={styles.productImage}
                      src={product.photo}
                      alt=''
                    ></img>
                  </td>
                  <td>{product.title}</td>
                  <td key={_id}>
                    <TextareaAutosize
                    className={isActive ? styles.textarea : styles.textareaOff} 
                    aria-label="empty textarea" 
                    placeholder={product.comment === undefined ? "Empty" : product.comment.comment} 
                    /* value={null} */
                    onChange={(event) => leaveCommentInput(product._id, event.target.value)}
                    />
                    <button className={styles.commentButton} onClick={(event) => activeComment(event, product._id)} type="submit"><Icon name="comment" /></button>
                  </td>
                  <td>
                    <span className='price-currency-symbol'>$ </span>
                    {product.price}
                  </td>
                  <td className={styles.quantity}>
                    <Button
                      variant='product'
                      className={styles.buttonQty}
                      onClick={() => changeQuantity(product._id, 'decrease')}
                    >
                      <Icon name="minus" />
                    </Button>
                    <input
                      className={styles.inputNumber}
                      type='text'
                      min='0'
                      value={finalAmount(product)}
                      onChange={event => setValue(event.currentTarget.value)}
                    />
                    <Button
                      variant='product'
                      className={styles.buttonQty}
                      onClick={() => changeQuantity(product._id, 'increase')}
                    >
                      <Icon name="plus" />
                    </Button>
                  </td>
                  <td>
                    <span className='price-currency-symbol'>$ </span>
                    {finalPrice(product)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={`table ${styles.table}`}>
          <table className={`col ${styles.tableTotal}`}>
            <thead className={styles.thead}>
              <tr className={styles.theadItem}>
                <th>&nbsp;</th>
                <th scope='col'>Cart total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.theadItem}>
                <th scope='col'>Total</th>
                <td className={styles.totalPrice}>
                  <span className='price-currency-symbol'>$ </span>
                  {totalPrice(productsInCart)}
                </td>
              </tr>
            </tbody>
          </table>
          <button className={styles.send}>
            <Link to={`/cart/payment`} className={styles.link}>
                <Icon className={styles.iconCheck} name="calendar-check" />
                <p>Proceed to checkout</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
};

export default Cart;
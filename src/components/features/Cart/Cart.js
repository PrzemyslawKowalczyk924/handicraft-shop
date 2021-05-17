import React, { useState } from 'react';
import styles from './Cart.module.scss';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';

const Cart = ({productsInCart, removeProduct, changeAmount, amountOfProductsInCart}) => {

  const [value, setValue] = useState(0);

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
              {productsInCart.map((product, id) => (
                <tr key={id} className={styles.theadItem}>
                  <th scope='row'>
                    <Button
                      className={styles.productRemover}
                      onClick={() => removeProduct(product.id)}
                    >
                      <Icon name="faHome" />
                    </Button>
                  </th>
                  <td>
                    <img
                      className={styles.productImage}
                      src={product.image}
                      alt=''
                    ></img>
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <span className='price-currency-symbol'>$ </span>
                    {product.price}
                  </td>
                  <td className={styles.quantity}>
                    <Button
                      variant='product'
                      className={styles.buttonQty}
                      onClick={() => changeAmount(product.id, 'decrease')}
                    >
                      <Icon name="faMinus" />
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
                      onClick={() => changeAmount(product.id, 'increase')}
                    >
                      <Icon icon="faPlus" />
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
        <div className={styles.buttons}>
          <Button variant='small' className={styles.button2}>
            Update cart
          </Button>
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
                <th scope='col'>Subtotal</th>
                <td>
                  <span className='price-currency-symbol'>$ </span>0
                </td>
              </tr>
              <tr className={styles.theadItem}>
                <th scope='col'>Total</th>
                <td className={styles.totalPrice}>
                  <span className='price-currency-symbol'>$ </span>
                  {totalPrice(productsInCart)}
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.buttons}>
            <Button variant='small' className={styles.checkoutButton}>
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cart;
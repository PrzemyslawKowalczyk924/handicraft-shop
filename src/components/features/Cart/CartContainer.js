import { connect } from 'react-redux';
import {
  getAll,
  getCount,
  addProduct,
  changeAmount,
  removeProduct,
  editProduct,
} from '../../../redux/cartRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  productsInCart: getAll(state),
  amountOfProductsInCart: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload)),
  changeAmount: payload => dispatch(changeAmount(payload)),
  removeProduct: payload => dispatch(removeProduct(payload)),
  editProduct: payload => dispatch(editProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
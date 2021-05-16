import { connect } from 'react-redux';
import {
  getAll,
  getCount,
  addProduct,
  changeAmount,
  removeProduct,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
import { connect } from 'react-redux';
import {
  getAll,
  getCount,
  addProduct,
  changeAmount,
  removeProduct,
  getTotalCost,
} from '../../../redux/cartRedux';
import Payment from './Payment';

const mapStateToProps = state => ({
  productsInCart: getAll(state),
  amountOfProductsInCart: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: payload => dispatch(addProduct(payload)),
  changeAmount: payload => dispatch(changeAmount(payload)),
  removeProduct: payload => dispatch(removeProduct(payload)),
  getTotalCost: payload => dispatch(getTotalCost(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
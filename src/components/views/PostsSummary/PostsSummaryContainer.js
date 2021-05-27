import { connect } from 'react-redux';

import PostsSummary from './PostsSummary';

import { addProduct, getCount, getAll, changeAmount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
  productsInCart: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: value => dispatch(addProduct(value)),
  changeAmount: payload => dispatch(changeAmount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSummary);
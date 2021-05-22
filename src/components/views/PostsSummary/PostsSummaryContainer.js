import { connect } from 'react-redux';

import PostsSummary from './PostsSummary';

import { addProduct, getCount, addToCartRequest } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: value => dispatch(addProduct(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsSummary);
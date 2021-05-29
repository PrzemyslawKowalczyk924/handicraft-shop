import { connect } from 'react-redux';
import Header from './Header';
import { getCount, getTotalCartProducts, getAll} from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
  productsInCart: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  getCartAmount: payload => dispatch(getTotalCartProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
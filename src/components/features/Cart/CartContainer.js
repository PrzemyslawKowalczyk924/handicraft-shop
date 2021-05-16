import { connect } from 'react-redux';
import Cart from './Cart';
import { getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
});

export default connect(mapStateToProps)(Cart);
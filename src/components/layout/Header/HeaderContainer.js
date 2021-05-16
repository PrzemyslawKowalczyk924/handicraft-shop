import { connect } from 'react-redux';
import Header from './Header';
import { getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
});

export default connect(mapStateToProps)(Header);
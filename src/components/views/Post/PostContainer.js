import { connect } from 'react-redux';
import Post from './Post';
import { getAll, getSingleProduct, fetchPublishedById} from '../../../redux/productsRedux';
//import { getUserInfo } from '../../../redux/userRedux';
import { changeAmount  } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  //user: getUserInfo(state),
  product: getSingleProduct(state), 
  ...getSingleProduct(state),
  productsInCart: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  getProductById: () => dispatch(fetchPublishedById(props.match.params.id)),
  changeAmount: payload => dispatch(changeAmount(payload)),
  });

export default connect(mapStateToProps , mapDispatchToProps)(Post);
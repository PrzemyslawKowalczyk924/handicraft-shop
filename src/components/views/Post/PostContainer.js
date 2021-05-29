import { connect } from 'react-redux';
import Post from './Post';
import { getAll, getSingleProduct, fetchPublishedById} from '../../../redux/productsRedux';
//import { getUserInfo } from '../../../redux/userRedux';
import { changeAmount, addProduct  } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  //user: getUserInfo(state),
  product: getSingleProduct(state), 
  ...getSingleProduct(state),
  o: getAll(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addProduct: value => dispatch(addProduct(value)),
  getProductById: () => dispatch(fetchPublishedById(props.match.params.id)),
  changeAmount: payload => dispatch(changeAmount(payload)),
  });

export default connect(mapStateToProps , mapDispatchToProps)(Post);
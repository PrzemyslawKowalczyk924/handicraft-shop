import { connect } from 'react-redux';
import Post from './Post';
import { getProductById, getSingleProduct, fetchPublishedById } from '../../../redux/productsRedux';
//import { getUserInfo } from '../../../redux/userRedux';

const mapStateToProps = (state) => ({
  //user: getUserInfo(state),
  ...getSingleProduct(state),
});

/* const mapStateToProps = (state, props) => ({
  ...getProductById(state, props.match.params.id),
}); */

const mapDispatchToProps = (dispatch, props) => ({
  getProductById: () => dispatch(fetchPublishedById(props.match.params.id)),
  });

export default connect(mapStateToProps , mapDispatchToProps)(Post);
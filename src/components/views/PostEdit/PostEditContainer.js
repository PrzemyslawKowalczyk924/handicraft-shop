import { connect } from 'react-redux';
import PostEdit from './PostEdit';
import { getSingleProduct, EditPostRequest, fetchPublishedById } from '../../../redux/productsRedux';
import { getUserInfo } from '../../../redux/userRedux';

const mapStateToProps = (state) => ({
  user: getUserInfo(state),
  ...getSingleProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  editPost: (post) => dispatch(EditPostRequest(post)),
  getPostById: () => dispatch(fetchPublishedById(props.match.params.id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(PostEdit);

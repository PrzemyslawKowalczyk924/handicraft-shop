import { connect } from 'react-redux';
import PostAdd from './PostAdd';
import { addPostRequest } from '../../../redux/postsRedux';

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
});

export default connect(null, mapDispatchToProps)(PostAdd);
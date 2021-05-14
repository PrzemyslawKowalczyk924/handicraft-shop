import { connect } from 'react-redux';
import Post from './Post';
import { getSinglePost, fetchPublishedById } from '../../../redux/postsRedux';
import { getUserInfo } from '../../../redux/userRedux';

const mapStateToProps = (state) => ({
  user: getUserInfo(state),
  ...getSinglePost(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  getPostById: () => dispatch(fetchPublishedById(props.match.params.id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Post);
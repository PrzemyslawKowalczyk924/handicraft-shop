import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getAll, fetchPublished } from '../../../redux/postsRedux';

const mapStateToProps = (state) => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
fetchPublishedPosts: () => dispatch(fetchPublished()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
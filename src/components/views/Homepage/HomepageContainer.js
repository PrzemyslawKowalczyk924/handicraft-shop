import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getAll, fetchPublished } from '../../../redux/productsRedux';

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
fetchPublishedPosts: () => dispatch(fetchPublished()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
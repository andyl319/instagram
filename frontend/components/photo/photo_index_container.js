import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import {requestAllPhotos} from '../../actions/photo_actions';
import {selectAllPhotos} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);

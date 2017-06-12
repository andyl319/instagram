import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import {requestPhoto, removePhoto} from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  photo: state.photo,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestPhoto: id => dispatch(requestPhoto(id)),
  removePhoto: id => dispatch(removePhoto(id))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);

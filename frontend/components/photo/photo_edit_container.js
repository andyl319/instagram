import { connect } from 'react-redux';
import { requestPhoto, updatePhoto } from '../../actions/photo_actions';
import PhotoEdit from './photo_edit';


const mapStateToProps = (state) => ({
  photo: state.photo,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestPhoto: id => dispatch(requestPhoto(id)),
  updatePhoto: (photo, id) => dispatch(updatePhoto(photo, id))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoEdit);

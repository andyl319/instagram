import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import PhotoShowReducer from './photo_show_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  photo: PhotoShowReducer
});


export default RootReducer;

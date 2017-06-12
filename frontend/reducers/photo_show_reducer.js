import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotoShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      let newState = merge({}, state, action.photo);
      return newState;
    default:
      return state;
  }
};

export default PhotoShowReducer;

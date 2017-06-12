import * as APIUtil from '../util/photo_api_util';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receiveAllPhotos = (photos) => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

export const requestAllPhotos = () => dispatch => (
  APIUtil.fetchAllPhotos()
    .then(photos => dispatch(receiveAllPhotos(photos))
  )
);

export const receivePhoto = (photo) => ({
  type: RECEIVE_PHOTO,
  photo
});

export const requestPhoto = (id) => dispatch => {
  APIUtil.fetchPhoto(id)
    .then(photo => {
      dispatch(receivePhoto(photo));
      return photo;
    });
};

export const createPhoto = (photo) => dispatch => (
  APIUtil.createPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo)))

);

export const removePhoto = id => dispatch => (
  APIUtil.removePhoto(id)
  .then(id => dispatch(removePhoto(id)))
);

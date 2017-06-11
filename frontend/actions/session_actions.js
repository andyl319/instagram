import * as APIUTIL from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => (
  APIUTIL.login(user)
    .then(usr => dispatch(receiveCurrentUser(usr)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUTIL.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUTIL.signup(user)
    .then(usr => dispatch(receiveCurrentUser(usr)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

import { handleActions, createAction } from 'redux-actions';
import { push } from 'react-router-redux';
import * as sessionUserApi from '../../api/session-user';

const initialState = {
  online: false,
  invalidLogin: false,
  activeUser: {}
};

export const LOGIN = 'session-user: login';
const LOGIN_SUCCESS = 'session-user: login-success';
const LOGIN_FAILURE = 'session-user: login-failure';
export const LOGOUT = 'session-user: logout';
const LOGOUT_SUCCESS = 'session-user: logout-success';
const LOGOUT_FAILURE = 'session-user: logout-failure';

export const sessionUserReducer = handleActions({
  [LOGIN]: (state, { payload }) => ({
    ...state,
    invalidLogin: false
  }),

  [LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    online: true,
    activeUser: payload,
    invalidLogin: false
  }),

  [LOGIN_FAILURE]: (state, { payload }) => ({
    ...state,
    invalidLogin: true
  }),

  [LOGOUT_SUCCESS]: (state) => ({
    ...state,
    online: false,
    activeUser: {}
  }),
}, initialState);

export const logIn = (encodedUser) => (dispatch, getState) => {
  dispatch({ type: LOGIN });
  
  sessionUserApi.logIn(encodedUser)
    .then((user) => dispatch(loginSuccess(user)))
    .then(() => dispatch(push('/main')))
    .catch(() => dispatch(loginFailure()))
};

export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const logout = createAction(LOGOUT);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailure = createAction(LOGOUT_FAILURE);



import { handleActions, createAction } from 'redux-actions';
import * as usersApi from '../../api/users';

const initialState = {
  users: [],
  showAddUserWindow: false,
  currentOrders: []
};

export const GET_ALL_USERS = 'users: get-all-users';
const GET_ALL_USERS_SUCCESS = 'users: get-all-users-success';
const GET_ALL_USERS_FAILURE = 'users: get-all-users-failure';
export const ADD_NEW_USER = 'users: add-new-user';
const ADD_NEW_USER_SUCCESS = 'users: add-new-user-success';
const ADD_NEW_USER_FAILURE = 'users: add-new-user-failure';
const HANDLE_ADD_USER_WINDOW = 'users: handle-add-user-window';
export const DELETE_USER = 'users: delete-user';
const DELETE_USER_SUCCESS = 'users: delete-user-success';
const DELETE_USER_FAILURE = 'users: delete-user-failure';
export const GET_USER_CURRENT_ORDERS = 'users: get-user-current-orders';
const GET_USER_CURRENT_ORDERS_SUCCESS = 'users: get-user-current-orders-success';
const GET_USER_CURRENT_ORDERS_FAILURE = 'users: get-user-current-orders-failure';

export const usersReducer = handleActions({
  [GET_ALL_USERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    users: payload
  }),

  [HANDLE_ADD_USER_WINDOW]: (state) => ({
    ...state,
    showAddUserWindow: !state.showAddUserWindow
  }),
  
  [GET_USER_CURRENT_ORDERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    currentOrders: payload
  })

}, initialState);

export const getAllUsers = () => (dispatch, getState) => {
  dispatch({ type: GET_ALL_USERS });

  usersApi.getAllUsers()
    .then((users) => dispatch(getAllUsersSuccess(users)))
    .catch(() => dispatch(getAllUsersFailure()));
};

export const addNewUser = (user) => (dispatch, getState) => {
  dispatch({ type: ADD_NEW_USER });
  
  usersApi.addNewUser(user)
    .then(() => dispatch(addNewUserSuccess()))
    .then(() => dispatch(getAllUsers()))
    .catch(() => dispatch(addNewUserFailure()));
}

export const deleteUser = (userId) => (dispatch, getState) => {
  dispatch({ type: DELETE_USER });
  
  usersApi.deleteUser(userId)
    .then(() => dispatch(deleteUserSuccess()))
    .then(() => dispatch(getAllUsers()))
    .catch(() => dispatch(deleteUserFailure()));
};

export const getUserCurrentOrders = (userId) => (dispatch, getState) => {
  dispatch({ type: GET_USER_CURRENT_ORDERS });

  usersApi.getUserCurrentOrders(userId)
    .then((currentOrders) => dispatch(getUserCurrentOrdersSuccess(currentOrders)))
    .catch(() => dispatch(getUserCurrentOrdersFailure()));
};

export const getAllUsersSuccess = createAction(GET_ALL_USERS_SUCCESS);
export const getAllUsersFailure = createAction(GET_ALL_USERS_FAILURE);
export const addNewUserSuccess = createAction(ADD_NEW_USER_SUCCESS);
export const addNewUserFailure = createAction(ADD_NEW_USER_FAILURE);
export const handleAddUserWindow = createAction(HANDLE_ADD_USER_WINDOW);
export const deleteUserSuccess = createAction(DELETE_USER_SUCCESS);
export const deleteUserFailure = createAction(DELETE_USER_FAILURE);
export const getUserCurrentOrdersSuccess = createAction(GET_USER_CURRENT_ORDERS_SUCCESS);
export const getUserCurrentOrdersFailure = createAction(GET_USER_CURRENT_ORDERS_FAILURE);


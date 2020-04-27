import { handleActions, createAction } from 'redux-actions';
import * as ordersApi from '../../api/orders';
import { getAllBooks } from '../books';

const initialState = {
  orders: []
};

export const GET_ALL_ORDERS = 'orders: get-all-orders';
const GET_ALL_ORDERS_SUCCESS = 'orders: get-all-orders-success';
const GET_ALL_ORDERS_FAILURE = 'orders: get-all-orders-failure';
export const ADD_NEW_ORDER = 'orders: add-new-order';
const ADD_NEW_ORDER_SUCCESS = 'orders: add-new-order-success';
const ADD_NEW_ORDER_FAILURE = 'orders: add-new-order-failure';
export const RETURN_ORDER = 'orders: return-order';
const RETURN_ORDER_SUCCESS = 'orders: return-order-success';
const RETURN_ORDER_FAILURE = 'orders: return-order-failure';

export const ordersReducer = handleActions({
  [GET_ALL_ORDERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    orders: payload
  }),
}, initialState);

export const getAllOrders = () => (dispatch, getState) => {
  dispatch({ type: GET_ALL_ORDERS });

  ordersApi.getAllOrders()
    .then((orders) => dispatch(getAllOrdersSuccess(orders)))
    .catch(() => dispatch(getAllOrdersFailure()));
};

export const addNewOrder = (bookId, userId) => (dispatch, getState) => {
  dispatch({ type: ADD_NEW_ORDER });
  
  ordersApi.addNewOrder(bookId, userId)
    .then(() => dispatch(addNewOrderSuccess()))
    .then(() => dispatch(getAllBooks()))
    .catch(() => dispatch(addNewOrderFailure()));
}

export const returnOrder = (orderId) => (dispatch, getState) => {
  dispatch({ type: RETURN_ORDER });

  ordersApi.returnOrder(orderId)
    .then(() => dispatch(returnOrderSuccess()))
    .then(() => dispatch(getAllOrders()))
    .catch(() => dispatch(returnOrderFailure()));
}

export const getAllOrdersSuccess = createAction(GET_ALL_ORDERS_SUCCESS);
export const getAllOrdersFailure = createAction(GET_ALL_ORDERS_FAILURE);
export const addNewOrderSuccess = createAction(ADD_NEW_ORDER_SUCCESS);
export const addNewOrderFailure = createAction(ADD_NEW_ORDER_FAILURE);
export const returnOrderSuccess = createAction(RETURN_ORDER_SUCCESS);
export const returnOrderFailure = createAction(RETURN_ORDER_FAILURE);



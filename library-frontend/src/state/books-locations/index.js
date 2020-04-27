import { handleActions, createAction } from 'redux-actions';
import * as booksLocationsApi from '../../api/books-locations';

const initialState = {
  booksLocations: [],
  freeBooksLocations: []
};

export const GET_ALL_BOOKS_LOCATIONS = 'books-locations: get-all-books-locations';
const GET_ALL_BOOKS_LOCATIONS_SUCCESS = 'books-locations: get-all-books-locations-success';
const GET_ALL_BOOKS_LOCATIONS_FAILURE = 'books-locations: get-all-books-locations-failure';
export const ADD_NEW_BOOK_LOCATION = 'books-locations: add-new-book-location';
const ADD_NEW_BOOK_LOCATION_SUCCESS = 'books-locations: add-new-book-location-success';
const ADD_NEW_BOOK_LOCATION_FAILURE = 'books-locations: add-new-book-location-failure';
export const GET_FREE_BOOKS_LOCATIONS = 'books-locations: get-free-books-locations';
const GET_FREE_BOOKS_LOCATIONS_SUCCESS = 'books-locations: get-free-books-locations-success';
const GET_FREE_BOOKS_LOCATIONS_FAILURE = 'books-locations: get-free-books-locations-failure';

export const booksLocationsReducer = handleActions({
  [GET_ALL_BOOKS_LOCATIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    booksLocations: payload
  }),

  [GET_FREE_BOOKS_LOCATIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    freeBooksLocations: payload
  })
}, initialState);

export const getAllBooksLocations = () => (dispatch, getState) => {
  dispatch({ type: GET_ALL_BOOKS_LOCATIONS });

  booksLocationsApi.getAllBooksLocations()
    .then((booksLocations) => dispatch(getAllBooksLocationsSuccess(booksLocations)))
    .catch(() => dispatch(getAllBooksLocationsFailure()));
};

export const addNewBookLocation = (bookLocation) => (dispatch, getState) => {
  dispatch({ type: ADD_NEW_BOOK_LOCATION });
  
  booksLocationsApi.addNewBookLocation(bookLocation)
    .then(() => dispatch(addNewBookLocationSuccess()))
    .then(() => dispatch(getAllBooksLocations()))
    .catch(() => dispatch(addNewBookLocationFailure()));
}

export const getFreeBooksLocations = () => (dispatch, getState) => {
  dispatch({ type: GET_FREE_BOOKS_LOCATIONS});

  booksLocationsApi.getFreeBooksLocations()
    .then((freeBooksLocations) => dispatch(getFreeBooksLocationsSuccess(freeBooksLocations)))
    .catch(() => dispatch(getFreeBooksLocationsFailure()));
}

export const getAllBooksLocationsSuccess = createAction(GET_ALL_BOOKS_LOCATIONS_SUCCESS);
export const getAllBooksLocationsFailure = createAction(GET_ALL_BOOKS_LOCATIONS_FAILURE);
export const addNewBookLocationSuccess = createAction(ADD_NEW_BOOK_LOCATION_SUCCESS);
export const addNewBookLocationFailure = createAction(ADD_NEW_BOOK_LOCATION_FAILURE);
export const getFreeBooksLocationsSuccess = createAction(GET_FREE_BOOKS_LOCATIONS_SUCCESS);
export const getFreeBooksLocationsFailure = createAction(GET_FREE_BOOKS_LOCATIONS_FAILURE);


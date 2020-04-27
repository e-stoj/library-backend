import { handleActions, createAction } from 'redux-actions';
import * as booksApi from '../../api/books';

const initialState = {
  books: [],
  availableBooks: [],
  topBooks: [],
  showAddBookWindow: false,
};

export const GET_ALL_BOOKS = 'books: get-all-books';
const GET_ALL_BOOKS_SUCCESS = 'books: get-all-books-success';
const GET_ALL_BOOKS_FAILURE = 'books: get-all-books-failure';
export const ADD_NEW_BOOK = 'books: add-new-book';
const ADD_NEW_BOOK_SUCCESS = 'books: add-new-book-success';
const ADD_NEW_BOOK_FAILURE = 'books: add-new-book-failure';
export const GET_AVAILABLE_BOOKS = 'books: get-available-books';
const GET_AVAILABLE_BOOKS_SUCCESS = 'books: get-available-books-success';
const GET_AVAILABLE_BOOKS_FAILURE = 'books: get-available-books-failure';
export const HANDLE_ADD_BOOK_WINDOW = 'books: handle-add-book-window';
export const DELETE_BOOK = 'books: delete-book';
const DELETE_BOOK_SUCCESS = 'books: delete-book-success';
const DELETE_BOOK_FAILURE = 'books: delete-book-failure';
export const GET_TOP_BOOKS = 'books: get-top-books';
const GET_TOP_BOOKS_SUCCESS = 'books: get-top-books-success';
const GET_TOP_BOOKS_FAILURE = 'books: get-top-books-failure';

export const booksReducer = handleActions({
  [GET_ALL_BOOKS_SUCCESS]: (state, { payload }) => ({
    ...state,
    books: payload
  }),

  [GET_AVAILABLE_BOOKS_SUCCESS]: (state, { payload }) => ({
    ...state,
    availableBooks: payload
  }),

  [HANDLE_ADD_BOOK_WINDOW]: (state, { payload }) => ({
    ...state,
    showAddBookWindow: !state.showAddBookWindow
  }),

  [GET_TOP_BOOKS_SUCCESS]: (state, { payload }) => ({
    ...state,
    topBooks: payload
  }),
}, initialState);

export const getAllBooks = () => (dispatch, getState) => {
  dispatch({ type: GET_ALL_BOOKS });

  booksApi.getAllBooks()
    .then((books) => dispatch(getAllBooksSuccess(books)))
    .catch(() => dispatch(getAllBooksFailure()));
};

export const addNewBook = (book, locationId) => (dispatch, getState) => {
  dispatch({ type: GET_ALL_BOOKS });
  
  booksApi.addNewBook(book, locationId)
    .then(() => dispatch(addNewBookSuccess()))
    .then(() => dispatch(getAllBooks()))
    .catch(() => dispatch(addNewBookFailure()));
};

export const getAvailableBooks = () => (dispatch, getState) => {
  dispatch({ type: GET_AVAILABLE_BOOKS });

  booksApi.getAvailableBooks()
    .then((books) => dispatch(getAvailableBooksSuccess(books)))
    .catch(() => dispatch(getAvailableBooksFailure()));
};

export const deleteBook = (bookId) => (dispatch, getState) => {
  dispatch({ type: DELETE_BOOK });
  
  booksApi.deleteBook(bookId)
    .then(() => dispatch(deleteBookSuccess()))
    .then(() => dispatch(getAllBooks()))
    .catch(() => dispatch(deleteBookFailure()));
};

export const getTopBooks = () => (dispatch, getState) => {
  dispatch({ type: GET_TOP_BOOKS });

  booksApi.getTopBooks()
    .then((topBooks) => dispatch(getTopBooksSuccess(topBooks)))
    .catch(() => dispatch(getTopBooksFailure()));
};

export const getAllBooksSuccess = createAction(GET_ALL_BOOKS_SUCCESS);
export const getAllBooksFailure = createAction(GET_ALL_BOOKS_FAILURE);
export const addNewBookSuccess = createAction(ADD_NEW_BOOK_SUCCESS);
export const addNewBookFailure = createAction(ADD_NEW_BOOK_FAILURE);
export const getAvailableBooksSuccess = createAction(GET_AVAILABLE_BOOKS_SUCCESS);
export const getAvailableBooksFailure = createAction(GET_AVAILABLE_BOOKS_FAILURE);
export const handleAddBookWindow = createAction(HANDLE_ADD_BOOK_WINDOW);
export const deleteBookSuccess = createAction(DELETE_BOOK_SUCCESS);
export const deleteBookFailure = createAction(DELETE_BOOK_FAILURE);
export const getTopBooksSuccess = createAction(GET_TOP_BOOKS_SUCCESS);
export const getTopBooksFailure = createAction(GET_TOP_BOOKS_FAILURE);


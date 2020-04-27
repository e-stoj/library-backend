import { get, toJSON, post, del } from '../utils'

export const getAllBooks = () => get('http://localhost:8080/books').then(toJSON);

export const addNewBook = (book, locationId) => post(`http://localhost:8080/books-locations/${locationId}/add-book`, book).then(toJSON);

export const getAvailableBooks = () => get('http://localhost:8080/books/available').then(toJSON);

export const deleteBook = (bookId) => del(`http://localhost:8080/books/${bookId}`);

export const getTopBooks = () => get('http://localhost:8080/books/top5').then(toJSON);


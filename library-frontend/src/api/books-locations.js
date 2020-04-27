import { get, toJSON, post } from '../utils'

export const getAllBooksLocations = () => get('http://localhost:8080/books-locations').then(toJSON);

export const addNewBookLocation = (bookLocation) => post('http://localhost:8080/book-location', bookLocation).then(toJSON);

export const getFreeBooksLocations = () => get('http://localhost:8080/books-locations/free').then(toJSON);
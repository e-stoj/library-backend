import { get, toJSON, post, put } from '../utils'

export const getAllOrders = () => get('http://localhost:8080/orders').then(toJSON);

export const addNewOrder = (bookId, userId) => post(`http://localhost:8080/books/${bookId}/order/${userId}`).then(toJSON);

export const returnOrder = (orderId) => put(`http://localhost:8080/orders/${orderId}/return`).then(toJSON);
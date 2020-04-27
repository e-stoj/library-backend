import { get, toJSON, post, del } from '../utils'

export const getAllUsers = () => get('http://localhost:8080/users').then(toJSON);

export const addNewUser = (reader) => post('http://localhost:8080/users', reader);

export const deleteUser = (userId) => del(`http://localhost:8080/users/${userId}`).then(toJSON);

export const getUserCurrentOrders = (userId) => get(`http://localhost:8080/users/${userId}/orders`).then(toJSON); 

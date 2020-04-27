import { toJSON, post } from '../utils/index';

export const logIn = (body) => post('http://localhost:8080/login', body).then(toJSON);

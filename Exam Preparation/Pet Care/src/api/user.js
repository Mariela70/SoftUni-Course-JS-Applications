import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

export async function login(email, password) {
    const result = await post('/users/login', {email, password})
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    setUserData(userData);
    return result;
}
export async function register( email, password) {
    const result = await post('/users/register', { email, password});
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    };
    setUserData(userData);
    return result;
}
export async function logout() {
    get('/users/logout');
    clearUserData();
}
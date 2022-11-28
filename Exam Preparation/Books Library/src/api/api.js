import { clearUserData, getAccessToken, setUserData} from '../util.js';

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };
    const token = getAccessToken();
    if(token) {
        options.headers['X-Authorization'] = token;
    }
    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    try {
        const response = await fetch(host + url, options);
        if(response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        try {
            return await response.json();
        }catch {
            return response;
        }

    }catch(err) {
        alert(err.message);
        throw err;

    }
}
export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');

export async function login(email, password) {
    const result = await post('/users/login', {email, password});
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
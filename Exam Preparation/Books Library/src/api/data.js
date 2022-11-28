import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const ednpoints = {
    dashboards: '/data/books?sortBy=_createdOn%20desc',
    byId: '/data/books/',
    create: '/data/books',
    editId: '/data/books/',
    deleteId: '/data/books/',
};

export async function getAllBooks() {
    return api.get(ednpoints.dashboards);
}
export async function getBookById(id) {
    return api.get(ednpoints.byId + id);
}
export async function getMyBooks(userId) {
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    
}
export async function createBook(book) {
    return api.post(ednpoints.create, book);
}
export async function editBook(id, book) {
    return api.put(ednpoints.editId + id, book);
}
export async function deleteBook(id) {
    return api.del(ednpoints.deleteId + id);
}
export async function likeBook(bookId) {
    return api.post('/data/likes', {
        bookId
    });
}
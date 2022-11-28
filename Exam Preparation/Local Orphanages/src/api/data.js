import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const ednpoints = {
    dashboards: '/data/posts?sortBy=_createdOn%20desc',
    detailsId: '/data/posts/',
    create: '/data/posts',
    editId: '/data/posts/',
    deleteId: '/data/posts/',
};

export async function getAllPosts() {
    return api.get(ednpoints.dashboards);
}
export async function detailsPosts(id) {
    return api.get(ednpoints.detailsId + id);
}
export async function getMyPosts(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    
}
export async function createPosts(post) {
    return api.post(ednpoints.create, post);
}
export async function editPosts(id, post) {
    return api.put(ednpoints.editId + id, post);
}
export async function deletePosts(id) {
    return api.del(ednpoints.deleteId + id);
}
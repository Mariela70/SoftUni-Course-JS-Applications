import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const ednpoints = {
    dashboards: '/data/shoes?sortBy=_createdOn%20desc',
    details: '/data/shoes/',
    create: '/data/shoes',
    editId: '/data/shoes/',
    deleteId: '/data/shoes/',
    search: '/data/shoes?where=brand%20LIKE%20%22${query}%22'
};

export async function getAll() {
    return api.get(ednpoints.dashboards);
}
export async function getDetails(id) {
    return api.get(ednpoints.details + id);
}
export async function create(data) {
    return api.post(ednpoints.create, data);
}
export async function editShoe(id, data) {
    return api.put(ednpoints.editId + id, data);
}
export async function deleteShoe(id) {
    return api.del(ednpoints.deleteId + id);
}
export async function searchShoe() {
    return api.get(ednpoints.search);
}
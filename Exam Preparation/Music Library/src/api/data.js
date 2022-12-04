import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const ednpoints = {
    dashboards: '/data/albums?sortBy=_createdOn%20desc',
    details: '/data/albums/',
    create: '/data/albums',
    editId: '/data/albums/',
    deleteId: '/data/albums/',
};

export async function getAll() {
    return api.get(ednpoints.dashboards);
}
export async function getDetails(id) {
    return api.get(ednpoints.details + id);
}
export async function createMusic(data) {
    return api.post(ednpoints.create, data);
}
export async function editMusic(id, data) {
    return api.put(ednpoints.editId + id, data);
}
export async function deleteMusic(id) {
    return api.del(ednpoints.deleteId + id);
}
import * as api from './api.js';

const ednpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
    deleteById: '/data/games/',
    update: '/data/games/'
};
export async function getRecent() {
    return api.get(ednpoints.recent);
}
export async function getAll() {
    return api.get(ednpoints.games);
}
export async function getById(id) {
    return api.get(ednpoints.byId + id);
}
export async function create(data) {
    return api.post(ednpoints.create, data);
}
export async function update(id, data) {
return api.put(ednpoints.update + id, data);
}
export async function deleteById(id) {
    return api.del(ednpoints.deleteById + id);
}
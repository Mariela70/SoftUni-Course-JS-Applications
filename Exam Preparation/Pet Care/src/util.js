export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}
export function getAccessToken() {
    const user = getUserData();
    if(user) {
        return user.accessToken;
    }else {
        return null;
    }
}
export function clearUserData() {
    sessionStorage.removeItem('userData');
}
export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}
export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event.target);
    };
}

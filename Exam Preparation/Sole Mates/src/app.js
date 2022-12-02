import { page, render } from './lib.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { dashboardPage } from './views/dashboard.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { searchPage } from './views/search.js';
import { logout } from './api/api.js';
import { homePage } from './views/home.js';
import { getUserData } from './util.js';


const root = document.getElementById('site-content');

page(decorateContext);
page('/', homePage);
page('/dashboard', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/search', searchPage);
page('/logout', onLogout);
updateUserNav();
page.start();


function onLogout(ctx) {
    logout();
    updateUserNav();
    ctx.page.redirect('/');
}

function updateUserNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('.user').style.display = 'inline-block';
        document.querySelector('.guest').style.display = 'none';

    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline-block';
    }
}

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}
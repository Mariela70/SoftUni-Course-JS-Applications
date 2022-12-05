import {page, render} from './lib.js';
import { getUserData } from './util.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { updateNav } from './views/nav.js';
import { registerPage } from './views/register.js';


const main = document.getElementById('content');

page(decorateContext);
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);


updateNav();
page.start();
function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;
    const user = getUserData();
    if(user) {
        ctx.user = user;
    }
    next();
}

function renderMain(content) {
    render(content, main);
}



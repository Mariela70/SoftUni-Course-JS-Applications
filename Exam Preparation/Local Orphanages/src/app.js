import { logout } from './api/api.js';
import {page, render} from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { myPostsPage } from './views/my-posts.js';
import { registerPage } from './views/register.js';


const root = document.getElementById('main-content');
page(decorateContext);

page('/', homePage);
page('/login', loginPage)
page('/register', registerPage);
page('/create', createPage);
page('/details', detailsPage);
page('/edit', editPage);
page('/my-posts', myPostsPage);
updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
ctx.updateUserNav = updateUserNav;
    next();
}
function updateUserNav() {
    const userData = getUserData();
    if(userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        

    }else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}



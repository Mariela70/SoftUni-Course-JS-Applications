import {page, render} from './lib.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create,js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { LoginPage } from './views/login.js';
import { registerPage } from './views/register.js';

import * as api from './api/data.js';
import { dashboardPage } from './views/dashboards.js';

window.api = api;

const root = document.querySelector('div.container');
page(decorateContext);

page('/', catalogPage)
page('/details/:id', detailsPage)
page('/dashboards', dashboardPage)
page('/create', createPage)
page('/edit/:id', editPage)
page('/login', LoginPage)
page('/register', registerPage)
page('/my-furniture', catalogPage)
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}
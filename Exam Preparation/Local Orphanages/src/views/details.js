import { deletePosts, detailsPosts } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';
const detailsTemplate = (post, isOwner, onDelete) => html`
<section id="details-page">
    <h1 class="title">${post.title}</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">${post.description}</p>
                <p class="post-address">${post.address}</p>
                <p class="post-number">${post.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>
                ${postControlsTemplate(post, isOwner, onDelete)}


                <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="#" class="donate-btn btn">Donate</a>
            </div>

        </div>
    </div>
    </div>
</section>`;

const postControlsTemplate = (post, isOwner, onDelete) => {
    if (isOwner) {
        return html`
                <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>`;
    } else {
        return null;
    }
}

export async function detailsPage(ctx) {
    const post = await detailsPosts(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData._id == post._ownerId;
    ctx.render(detailsTemplate(post, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete ${post.title}`)

        if (choice) {
            await deletePosts(ctx.params.id)
            ctx.page.redirect('/');
        }
    }
}
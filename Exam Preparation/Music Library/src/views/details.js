import { deleteMusic, getDetails } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (music, isOwner, onDelete, userData, onLike) => html`
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${music.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${music.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${music.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${music.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${music.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${music.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
            ${musicPreview(music, isOwner, onDelete, userData, onLike)}
            
          </div>
        </div>
      </section>`;

      const musicPreview = (music, isOwner, onDelete, userData, onLike) => {
        if(isOwner) {
          return html `
          <a href="/edit/${music._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
        }else if (userData != undefined && isOwner == false) {
          return html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`;
        }

      }

   

export async function detailsPage(ctx) {

    const music = await getDetails(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData && userData.id == music._ownerId;
    ctx.render(detailsTemplate(music, isOwner, onDelete, userData, onLike));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete?`)

        if(choice) {
            await deleteMusic(ctx.params.id)
            ctx.page.redirect('/dashboard');
        }
    }
     function onLike(event) {
      event.target.style.display = 'none';
    }
  
}
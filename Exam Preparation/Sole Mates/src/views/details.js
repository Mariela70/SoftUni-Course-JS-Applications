import { deleteShoe, getDetails } from '../api/data.js';
import { html, nothing } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (shoe, isOwner, onDelete) => html`
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src=${shoe.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
      <p>
        Model: <span id="details-model">${shoe.model}</span>
      </p>
      <p>Release date: <span id="details-release">${shoe.release}</span></p>
      <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
      <p>Value: <span id="details-value">${shoe.value}</span></p>
    </div>

    <!--Edit and Delete are only for creator-->
    
    ${shoe.isOwner
                ? html`
                <div id="action-buttons">
                <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>`
                : nothing}

    </div>
  </div>
</section>`;


export async function detailsPage(ctx) {
  ctx.render(detailsTemplate());

  const shoe = await getDetails(ctx.params.id);
  const userData = getUserData();
  const isOwner = userData && userData.id == shoe._ownerId;
  ctx.render(detailsTemplate(shoe, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm(`Are you sure you want to delete ${shoe.title}`)

    if (choice) {
      await deleteShoe(ctx.params.id)
      ctx.page.redirect('/');
    }
  }
}
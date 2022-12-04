import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (musics) => html`
<section id="dashboard">
        <h2>Albums</h2>
        ${musics.length == 0
        ? html`<h2>There are no albums added yet.</h2>`
      : html` <ul class="card-wrapper">
        ${musics.map(musicsList)}
      </ul>`}
      </section>`;
      const musicsList = (music) => html`
      <li class="card">
            <img src=${music.imageUrl} alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${music.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${music.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${music.sales}</span></p>
            <a class="details-btn" href="/details/${music._id}">Details</a>
          </li>`;


export async function dashboardPage(ctx) {
  const musics = await getAll();
    ctx.render(dashboardTemplate(musics));
}
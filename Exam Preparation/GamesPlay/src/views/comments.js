import { html } from '../../node_modules/lit-html/lit-html.js';
import * as commentsService from '../api/comments.js';

const commntsTemplate = (comments) => html`
<div class="details-comments">
    <h2>Comments:</h2>
   ${commenList(comments)}

</div>`;
const commenList = (comments) => {
    if(comments.length == 0) {
        return html `<p class="no-comment">No comments.</p>`;
    }else {
        return html `
        <ul>${comments.map(commendCard)}</ul>`
        }
    }

const commendCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

export async function commentsView(gameId) {
    const comments = await commentsService.getByGameId(gameId);
    return commntsTemplate(comments);
}
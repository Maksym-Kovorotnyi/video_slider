export function galleryMurkup({ pictures, player_embed_url }) {
  return `
  <li class="item" data-video-url=${player_embed_url}>
    <img src=${pictures.base_link} alt="Bridge" class="image" width="300">
    </li>
`;
}

// export function modalMurkap({ player_embed_url }) {
//   return `<div
//         id="player"
//         class="modal-content"
//         data-vimeo-url=${player_embed_url}
//         data-vimeo-width="600"
//         data-vimeo-autoplay="true"
//       ></div>`;
// }

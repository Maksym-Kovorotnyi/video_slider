export function galleryMurkup({ pictures, player_embed_url }) {
  return `
  <li class="item" data-video-url=${player_embed_url}>
    <img src=${pictures.base_link} alt="Bridge" class="image" width="300">
    </li>
`;
}

export function galleryMurkup({ pictures }) {
  return `
    <img src=${pictures.base_link} alt="Bridge" class="image" width="300">
`;
}

export function modalMurkap({ player_embed_url }) {
  return `<iframe id="player" src="${player_embed_url} frameborder="0" allow="autoplay;" allowFullScreen></iframe>`;
}

function galleryMurkup({ pictures }) {
  return `
    <img src=${pictures.base_link} alt="Bridge" class="image" width="300">
`;
}

export default function createMurkup(callback) {
  const items = document.getElementsByClassName("item");
  callback()
    .then((videoData) => {
      Array.from(items).map((item) =>
        item.insertAdjacentHTML("beforeEnd", galleryMurkup(videoData))
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

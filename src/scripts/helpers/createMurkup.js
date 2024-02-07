export default function createMurkup(fetchFunction, murkup, domElement) {
  fetchFunction()
    .then((videoData) => {
      if (domElement.length) {
        Array.from(domElement).map((item) =>
          item.insertAdjacentHTML("beforeEnd", murkup(videoData))
        );
      } else {
        domElement.insertAdjacentHTML("beforeEnd", murkup(videoData));
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

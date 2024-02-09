export default function createMurkup(data, murkup, domElement) {
  data.map((obj) => {
    domElement.insertAdjacentHTML("beforeEnd", murkup(obj));
  });
}

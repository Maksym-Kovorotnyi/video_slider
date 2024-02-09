export default function createMurkup(data, murkup, domElement) {
  if (data.length > 0) {
    data.map((obj) => {
      domElement.insertAdjacentHTML("beforeEnd", murkup(obj));
    });
  } else {
    domElement.insertAdjacentHTML("beforeEnd", murkup(data));
  }
}

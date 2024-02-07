import getVideos from "./API/fetchVideos.js";
import createSlickSlider from "./scripts/slick.js";
import handleModal from "./scripts/modal.js";
import createMurkup from "./scripts/helpers/createMurkup.js";
import { galleryMurkup, modalMurkap } from "./scripts/murkup.js";

const items = document.getElementsByClassName("item");
const modalContent = document.getElementById("content");
const iframe = document.getElementById("player");
if (iframe !== null) {
  console.log(iframe);
}

createMurkup(getVideos, galleryMurkup, items);
createMurkup(getVideos, modalMurkap, modalContent);
createSlickSlider();
handleModal();

// const player = new Vimeo.Player(iframe);

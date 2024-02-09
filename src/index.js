import getVideos from "./API/fetchVideos.js";
import deepClone from "./scripts/helpers/deepClone.js";
import createSlickSlider from "./scripts/slick.js";
import createMurkup from "./scripts/helpers/createMurkup.js";
import handleModal from "./scripts/modal.js";
import { galleryMurkup } from "./scripts/murkup.js";
import setDataToLocalStorage from "./scripts/helpers/localStorage.js";

const list = document.getElementById("gallery");
const apiData = JSON.parse(localStorage.getItem("videoList"));

setDataToLocalStorage(getVideos, deepClone);
createMurkup(apiData, galleryMurkup, list);
createSlickSlider();
handleModal();

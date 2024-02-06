import getVideos from "./API/fetchVideos.js";
import createMurkup from "./scripts/murkup.js";
import createSlickSlider from "./scripts/slick.js";

createMurkup(getVideos);

createSlickSlider();

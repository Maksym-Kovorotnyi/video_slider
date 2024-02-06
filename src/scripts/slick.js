export default function createSlickSlider() {
  const list = document.getElementById("gallery");
  document.addEventListener("DOMContentLoaded", function () {
    $(list).slick({
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  });
}

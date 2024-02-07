export default function createSlickSlider() {
  const list = document.getElementById("gallery");
  document.addEventListener("DOMContentLoaded", function () {
    $(list).slick({
      infinite: false,
      swipe: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      dots: true,
      prevArrow:
        '<button type="button" class="slick-prev" style="left: 0;"></button>',
      nextArrow:
        '<button type="button" class="slick-next" style="right: 0;"></button>',
    });
  });
}

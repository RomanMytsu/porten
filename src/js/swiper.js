import Swiper from "swiper";
import "swiper/css";

let swiper = null;

function initSwiper() {
  if (window.innerWidth < 1024 && swiper === null) {
    swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 5,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  } else if (window.innerWidth >= 1024 && swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}
initSwiper();

window.addEventListener("resize", initSwiper);

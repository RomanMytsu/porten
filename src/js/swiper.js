import Swiper from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1440: {
      spaceBetween: 40,
    },
    1920: {
      spaceBetween: 50,
    },
  },
});

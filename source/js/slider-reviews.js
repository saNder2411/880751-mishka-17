var btnPrev = document.querySelector(".slider__button--prev");
var btnNext = document.querySelector(".slider__button--next");
var slideArray = document.querySelectorAll(".slider__item");
var currentSlide = 0;

if (document.querySelector(".slider") !== null) {
  btnPrev.addEventListener("click", function() {
    slideArray[currentSlide].classList.remove("slider__item--show");
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slideArray.length - 1;
    }

    slideArray[currentSlide].classList.add("slider__item--show");
  });

  btnNext.addEventListener("click", function() {
    slideArray[currentSlide].classList.remove("slider__item--show");
    currentSlide++;

    if (currentSlide >= slideArray.length) {
      currentSlide = 0;
    }

    slideArray[currentSlide].classList.add("slider__item--show");
  });
}

var btnPrev = document.querySelector(".slider__button--prev");
var btnNext = document.querySelector(".slider__button--next");
var slideArry = document.querySelectorAll(".slider__item");
var currentSlide = 0;

btnPrev.addEventListener("click", function() {
  // slideArry[currentSlide].style.display = "none";
  // slideArry[currentSlide].className = "slider__item";
  slideArry[currentSlide].classList.remove("slider__item--show");
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slideArry.length - 1;
  };

  // slideArry[currentSlide].style.display = "block";
  // slideArry[currentSlide].className = "slider__item--show";
  slideArry[currentSlide].classList.add("slider__item--show");
});

btnNext.addEventListener("click", function() {
  // slideArry[currentSlide].style.display = "none";
  // slideArry[currentSlide].className = "slider__item";
  slideArry[currentSlide].classList.remove("slider__item--show");
  currentSlide++;

  if (currentSlide >= slideArry.length) {
    currentSlide = 0;
  };

  // slideArry[currentSlide].style.display = "block";
  // slideArry[currentSlide].className = "slider__item--show";
  slideArry[currentSlide].classList.add("slider__item--show");
});

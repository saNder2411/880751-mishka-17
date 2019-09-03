var linkArray = document.querySelectorAll(".popup-opener");
var popup = document.querySelector(".modal__wrapper");
var popupBg = document.querySelector(".modal");
var closeAndSend = document.querySelector(".modal__form");

if (popupBg !== null) {
  for (var i = 0; i < linkArray.length; i++) {
    linkArray[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popupBg.classList.add("modal--show");
    });
  }

  closeAndSend.addEventListener("submit", function() {
    popupBg.classList.remove("modal--show");
  });

  popupBg.addEventListener("click", function() {
    var clickInside = popup.contains(event.target);

    if (!clickInside) {
      popupBg.classList.remove("modal--show");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {

      if (popupBg.classList.contains("modal--show")) {
        evt.preventDefault();
        popupBg.classList.remove("modal--show");
      }
    }
  });
}

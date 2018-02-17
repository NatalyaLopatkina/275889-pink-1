document.addEventListener('DOMContentLoaded', function(){
  var navMain = document.querySelector(".main-nav");
  var navButton = document.querySelector(".page-header__button");
  var navWrapper = document.querySelector(".page-header__wrapper");

  navMain.classList.remove("main-nav--nojs");
  navWrapper.classList.remove("page-header--nojs");

  navButton.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
      navButton.classList.remove("page-header__button--opened");
      navButton.classList.add("page-header__button--closed");

    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
      navButton.classList.remove("page-header__button--closed");
      navButton.classList.add("page-header__button--opened");
    }
  });

});

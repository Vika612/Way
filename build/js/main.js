"use strict";

/* BURGER MENU */

(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuClose = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".menu__link");

  burger.addEventListener("click", () => {
    menu.classList.add('header__nav--active');
  }) 
  menuClose.addEventListener("click", () => {
    menu.classList.remove('header__nav--active');
  }) 
  if (window.innerWidth <= 1023) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("header__nav--active");
      })
    }
  }
}());


/* SCROLL TO ANCHORS */

(function () {

  const smoothScroll = function (targetEl, duration) {
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());

/* TAB */

(function () {

  let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item');
    let tabContent = document.querySelectorAll('.tab');
    let tabName;

    tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
    });

    function selectTabNav () {
      tabNav.forEach(item => {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent (tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
    }
  };
  tab();
}());


/* POP-UP */ 

const buyButtons = document.querySelectorAll(".js-button");
const popup = document.querySelector(".popup");
const close = document.querySelector(".popup__button");

for (let i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", evt => {
    evt.preventDefault();
    popup.classList.add("popup--open");
  })
};

close.addEventListener('click', evt => {
  popup.classList.remove("popup--open");
  evt.preventDefault();
});

window.addEventListener('keydown', evt => {
  if (evt.code === 'Escape') {
    if (popup.classList.contains("popup--open")) {
      popup.classList.remove("popup--open");
      evt.preventDefault();
    }
  }
});

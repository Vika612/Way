

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

var form = document.querySelector(".form");
var nameInput = document.querySelector("[name=name]");
var surnameInput = document.querySelector("[name=surname]");
var mailInput = document.querySelector("[name=email]");
var telInput = document.querySelector("[name=phone]");
var togBtn = document.querySelector(".form__button");
var modal = document.querySelector(".modal");
var modalClose = modal.querySelector(".modal__close");
var modalFailure = modal.querySelector(".modal__failure");
var modalSuccess = modal.querySelector(".modal__success");
var failureBtn = modal.querySelector(".modal__failure-btn");
var successBtn = modal.querySelector(".modal__success-btn");
var borderRed = modal.querySelector(".form__input--warning");

togBtn.addEventListener("click", function(evt) {
  nameInput.classList.remove("form__input--warning");
  surnameInput.classList.remove("form__input--warning");
  mailInput.classList.remove("form__input--warning");
  telInput.classList.remove("form__input--warning");
  if (!nameInput.value || !surnameInput.value || !mailInput.value || !telInput.value) {
    modalFailure.classList.remove("modal__close");
    if(!nameInput.value) {
      nameInput.classList.add("form__input--warning");
    };
    if(!surnameInput.value) {
      surnameInput.classList.add("form__input--warning");
    };
    if(!mailInput.value) {
      mailInput.classList.add("form__input--warning");
    };
    if(!telInput.value) {
      telInput.classList.add("form__input--warning");
    };
  } else {
    modalSuccess.classList.remove("modal__close");
  }
  evt.preventDefault();
});


failureBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFailure.classList.add("modal__close");
});

successBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSuccess.classList.add("modal__close");
});

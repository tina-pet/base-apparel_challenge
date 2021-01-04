'use strict';

const inputElm = document.querySelector('input');

const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,4}$/;
const isValid = (event) => {
  const errorMsg = document.querySelector('.error-message__hide');
  const iconErr = document.querySelector('.error-icon');
  if (!regEmail.test(inputElm.value)) {
    event.preventDefault();
    errorMsg.classList.add('error-message__show');
    inputElm.classList.add('input-error');
    iconErr.classList.add('error-icon__show');
  }
};

const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', isValid);

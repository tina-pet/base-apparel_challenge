'use strict';

const inputElm = document.querySelector('input');
let erMsgShown = false;
const emailIsValid = (event) => {
  const errorMsg = document.querySelector('.error-message__hide');
  const iconErr = document.querySelector('.error-icon');
  if (
    !inputElm.value.includes('@') ||
    inputElm.value.includes(' ') ||
    inputElm.value === ''
  ) {
    event.preventDefault();
    errorMsg.classList.add('error-message__show');
    inputElm.classList.add('input-error');
    iconErr.classList.add('error-icon__show');
  }
};

const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', emailIsValid);

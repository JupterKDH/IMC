/*
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')
*/
export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  // modalWrapper.classList.remove('open')
  Modal.close()
 }

window.addEventListener('keydown', handleKeyDown)
function handleKeyDown (event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
import { Modal } from './modal.js'
import { alertError } from './alert-error.js';
import { notANumber, calculateIMC} from './utils.js';

// variaveís

const form = document.querySelector('form');
const inputWeight = document.querySelector('#imc-weight');
const inputHeight = document.querySelector('#imc-height');

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()
// 3 maneiras de criar e atribuir função a um evento
form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber) {
    alertError.open()

    return;    
  } 
 

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  
  //modalMessage.innerText = message
  Modal.message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()
}

/*
form.onsubmit = () => {}

form.onsubmit = handleSubmit

function handleSubmit() {}
*/

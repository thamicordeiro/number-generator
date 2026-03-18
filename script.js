const number = document.getElementById("number")
const min = document.getElementById("min")
const max = document.getElementById("max")
const message = document.getElementById("message")

const form = document.querySelector("form")
const button = document.querySelector(".btn-primary")

form.addEventListener ("submit", function (event)  {
  event.preventDefault() 

const amount = Number(number.value)
const minValue = Number(number.value)
const maxValue = Number(number.value)
const noRepeat = document.getElementById("no-repeat")


 if (!number.value || !min.value || !max.value) {
  
  message.textContent = "Preencha todos os campos."
  return
}

if (maxValue <= minValue) {
  message.textContent = "Digite um valor maior que o mínimo."
  return
}

if ( amount <=0 ) {
  message.textConteto = "A quantidade deve ser maior que zero."
}

if (noRepeat && amount > totalAvailable) {
  message.textContent = "A quantidade não pode ser maior que o intervalo.";
  return;
}

})
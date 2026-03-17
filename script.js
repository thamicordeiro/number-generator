const numero = document.getElementById("numero")
const minimo = document.getElementById("minimo")
const maximo = document.getElementById("maximo")
const message = document.getElementById("mensagem")

const form = document.querySelector("form")
const button = document.querySelector(".btn-primary")

form.addEventListener ("submit", function (event)  {
  event.preventDefault() 


if (!numero.value || !minimo.value || !maximo.value) {
  
  message.textContent = "Preencha todos os campos"
  return
}
 
if (Number(maximo.value) <= Number(minimo.value)) {
  message.textContent = "Digite um valor maior que o mínimo"
  return
}

})
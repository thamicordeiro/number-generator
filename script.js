const numero = document.getElementById("numero")
const minimo = document.getElementById("minimo")
const maximo = document.getElementById("maximo")
const message = document.getElementById("mensagem")
const button = document.querySelector(".btn-primary")

if (!numero.value || !minimo.value || !maximo.value) {
  
  message.textContent = "Preencha todos os campos"

  message.classList.remove("success")
  message.classList.add("error")

}
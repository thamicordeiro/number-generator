const number = document.getElementById("number")
const min = document.getElementById("min")
const max = document.getElementById("max")
const message = document.getElementById("message")
const resultSection = document.getElementById("result-section")
const form = document.querySelector("form")
const button = document.querySelector(".btn-primary")

function withRepetition (qtd, min, max) {

  const result = []

  for (let i = 0; i < qtd; i++) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min
    result.push(number)
  }
  return result
}

function noRepetition (qtd, min, max) {
  const result = []

  while (result.length < qtd) {
const number = Math.floor(Math.random() * (max - min + 1)) + min

if (!result.includes(number)) {
  result.push(number)
 }
} 

 return result

}

form.addEventListener ("submit", function (event)  {
  event.preventDefault() 

const amount = Number(number.value)
const minValue = Number(min.value)
const maxValue = Number(max.value)
const noRepeat = document.getElementById("no-repeat")

const totalAvailable = maxValue - minValue + 1

message.textContent = ""

 if (!number.value || !min.value || !max.value) {
  
  message.textContent = "Preencha todos os campos."
  return
}

if (maxValue <= minValue) {
  message.textContent = "Digite um valor maior que o mínimo."
  return
}

if ( amount <=0 ) {
  message.textContent = "A quantidade deve ser maior que zero."
  return
}


if (noRepeat.checked && amount > totalAvailable) {
  message.textContent = "A quantidade não pode ser maior que o intervalo.";
  return;
}

 let numbers
 if (noRepeat.checked) {
  numbers = noRepetition(amount, minValue, maxValue)
 } else {
  numbers = withRepetition(amount, minValue, maxValue)
 }
 
form.style.display = "none"
resultSection.style.display = "block"

resultSection.classList.add("animation")

const resultEl = document.getElementById("result")

resultEl.innerHTML = ""

numbers.forEach((num, index) => {
  const wrapper = document.createElement("div")
  wrapper.classList.add("number-wrapper")

  const bg = document.createElement("div")
  bg.classList.add("number-bg")

  const span = document.createElement("span")
  span.classList.add("number")
  span.textContent = ""

  wrapper.appendChild(bg)
  wrapper.appendChild(span)
  resultEl.appendChild(wrapper)

const timeTotal = 6000
const delay = index * timeTotal

const tempoAparecerBg = 1200 // 20% de 6s

// BG começa
setTimeout(() => {
  bg.classList.add("show")
}, delay)

// número entra DEPOIS que o BG apareceu
setTimeout(() => {
  wrapper.classList.add("animate")
  span.textContent = num
  span.classList.add("animate")
  wrapper.classList.add("animation")
}, delay + tempoAparecerBg)
 
}

 )})




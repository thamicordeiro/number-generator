const number = document.getElementById("number")
const min = document.getElementById("min")
const max = document.getElementById("max")
const message = document.getElementById("message")
const resultSection = document.getElementById("result-section")
const form = document.querySelector("form")
const button = document.querySelector(".btn-primary")
const resultEl = document.getElementById("result")
const newDrawBtn = document.getElementById("new-draw")

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
  message.classList.add("error")
  message.classList.remove("success")
  return
}

if (maxValue <= minValue) {
  message.textContent = "Digite um valor maior que o mínimo."
  message.classList.add("error")
  message.classList.remove("success")
  return
}

if ( amount <=0 ) {
  message.textContent = "A quantidade deve ser maior que zero."
  message.classList.add("error")
  message.classList.remove("success")
  return
}


if (noRepeat.checked && amount > totalAvailable) {
  message.textContent = "A quantidade não pode ser maior que o intervalo.";
  message.classList.remove("success")
  message.classList.add("error")
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

newDrawBtn.classList.remove("show")

resultEl.innerHTML = ""

if (numbers.length >= 10)  {
resultEl.classList.add("scroll")
} else {
resultEl.classList.remove("scroll")
}


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

const timeTotal = 4000
const delay = index * timeTotal

const tempoAparecerBg = 1200 // 20% de 6s

setTimeout(() => {
  bg.classList.add("show")
}, delay)


setTimeout(() => {
  wrapper.classList.add("animate")
  span.textContent = num
  span.classList.add("animate")
  wrapper.classList.add("animation")
}, delay + tempoAparecerBg)
 
}
)
const totalAnimacao = (numbers.length * 4000) + 1200

setTimeout(() => {
  
  newDrawBtn.classList.add("show")
  message.textContent = "Sorteio realizado com sucesso!"  
  message.classList.add("success")

  setTimeout(() => {
 message.textContent = ""
 message.classList.remove("sucess")
  }, 3000)
}, totalAnimacao)

})

newDrawBtn.addEventListener ( "click", () =>  {

  form.style.display = "block"
  
  resultSection.style.display = "none"

  resultEl.innerHTML = ""

  message.textContent = ""
  message.classList.remove("show", "success", "error")

})




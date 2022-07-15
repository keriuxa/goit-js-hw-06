const sizeControler = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

const controller = (event) => text.style.fontSize = `${sizeControler.value}px`

sizeControler.addEventListener('input', controller)
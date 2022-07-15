function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body")
const button = document.querySelector('.change-color')
const color = document.querySelector('.color')

function changeBackgroundColor (event) {
  body.style.backgroundColor = getRandomHexColor ();
  color.textContent = body.style.backgroundColor;
}

button.addEventListener('click', changeBackgroundColor)
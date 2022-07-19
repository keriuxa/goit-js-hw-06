function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector('#controls')
const boxes = document.querySelector('#boxes')
const input = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')

const createBoxes = (amount) =>{
    const newBoxes = [];
    let boxSizes = 20
    for (let i=0; i<amount; i+=1) {
      boxSizes = boxSizes +10;   
      const boxCreate = document.createElement('div')
            boxCreate.style.height = `${boxSizes}px`
            boxCreate.style.width = `${boxSizes}px`
            boxCreate.style.backgroundColor = getRandomHexColor()
            newBoxes.push(boxCreate)
}
boxes.append(...newBoxes)
}

createBtn.addEventListener('click', (event) =>createBoxes(input.value))

destroyBtn.addEventListener('click', (event)=> {
  boxes.innerHTML = '' 
  input.value = ''
})
const counter = document.querySelector('#counter')
const minusButton = counter.firstElementChild;
const plusButton = counter.lastElementChild;
const value = document.querySelector("#value");
let countValue = 0;

function removeValue (Event) {
    countValue -= 1
    return value.innerHTML = `<span id="value">${countValue} </span>`
}

function addValue (Event) {
   countValue += 1
    return value.innerHTML = `<span id="value">${countValue} </span>`
}

minusButton.addEventListener("click",removeValue);
plusButton.addEventListener("click", addValue)
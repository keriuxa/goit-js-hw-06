const input = document.querySelector('#name-input')
const greetes = document.querySelector("#name-output")

function sayHello(event){
    if(event.currentTarget.value !== " "){
        greetes.textContent = event.currentTarget.value;
    }
}
input.addEventListener('input', sayHello)


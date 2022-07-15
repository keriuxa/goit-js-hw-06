const input = document.querySelector('#name-input')
const greetes = document.querySelector("#name-output")

function sayHello(event){
    if(event.currentTarget.value.trim() !== ""){
        greetes.textContent = event.currentTarget.value;
    }
    else  greetes.textContent = "Anonymous"
}
input.addEventListener('input', sayHello)


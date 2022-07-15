const input = document.querySelector("#validation-input")

function checkImput (event) {
  
    if (event.currentTarget.value.length !== Number(input.dataset.length)) {
      return  event.currentTarget.classList.contains('valid') 
      ? event.currentTarget.classList.replace('valid', 'invalid')
      :event.currentTarget.classList.add('invalid')
    }
    return  event.currentTarget.classList.replace('invalid','valid')
}

input.addEventListener('blur', checkImput)

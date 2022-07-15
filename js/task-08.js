
const loginForm = document.querySelector(".login-form")

function userInfo(event) {
    event.preventDefault();
    const  inputs = { 
        email: `${event.currentTarget.email.value}`,
        password: `${event.currentTarget.password.value}` 
    }

    if (inputs.email ==="" || inputs.password ===""){
        return alert("Please fill the form!")
    }
    
    event.currentTarget.email.value = ""
    event.currentTarget.password.value = ""
    return console.log(inputs)

}
 
loginForm.addEventListener('submit', userInfo)



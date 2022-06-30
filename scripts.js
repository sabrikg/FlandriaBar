
const nameInput = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Nombre inválido";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }  

    if(surname.value.length < 1){
        errorNodes[1].innerText = "Apellido inválido";
        surname.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[2].innerText = "Email inválido";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(phone.value.length < 1){
        errorNodes[3].innerText = "Teléfono inválido";
        phone.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Reserva realizada con éxito!"
    }
}

function clearMessages(){
    for(let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    surname.classList.remove("error-border");
    email.classList.remove("error-border");
    phone.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

const form = document.getElementById('form');
const username = document.getElementById('Username');
const pw = document.getElementById('Password');
const confirmPW = document.getElementById('Confirmed-password');
const email = document.getElementById('Email');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkEmailInput(email, cb) {
    if(!cb(email)) {
        showError(email, 'Please use a valid email')
    } else {
        showSuccess(email)
    }
}

function checkInputs(inputsArray) {
    inputsArray.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${input.id} is required`)
        } else {
            showSuccess(input)
        }
    })
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkInputs([email, pw, confirmPW, username])
   checkEmailInput(email.value, isEmailValid)
})
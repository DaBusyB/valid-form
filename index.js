
const form = document.getElementById('form');
const username = document.getElementById('username');
const pw = document.getElementById('password');
const confirmPW = document.getElementById('confirm-password');
const email = document.getElementById('email');

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

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    } 

    if(email.value === '') {
        showError(email, 'Email is required')
    } else if (!isEmailValid(email.value)) {
        showError(email, 'An email address is required')
    } else {
        showSuccess(email)
    }

    if(pw.value === '') {
        showError(pw, 'Password is required')
    } else {
        showSuccess(pw)
    }

    if(confirmPW.value === '') {
        showError(confirmPW, 'Confirmed password is required')
    } else {
        showSuccess(confirmPW)
    }

})
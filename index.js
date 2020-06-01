
const form = document.getElementById('form');
const username = document.getElementById('Username');
const pw = document.getElementById('Password');
const confirmPW = document.getElementById('Confirmed-password');
const email = document.getElementById('Email');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
    //console.log(input.parentElement)
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkInputs(inputsArray) {
    inputsArray.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${input.id} is required`)
            //console.log("error 2")
        } else {
            showSuccess(input)
            //console.log("success 2")
        }
    })
}

function isEmailValid(email) {
    // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //     return true
    // }
    // return false

    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase()) ?
    true :
    false);
}

function checkEmailInput(input, cb) {
    // if(!cb(input.value.trim())) {
    //     showError(input, 'Please use a valid email')
    //     //console.log("error 1")
    // } else {
    //     showSuccess(input)
    //     // console.log("success 1")
    // }

   return (!cb(input.value.trim()) ?
    showError(input, 'Please use a valid email') :
    showSuccess(input));
}

function checkConfirmedPWInput(pw1, pw2) {
    pw2.value !== pw1.value || pw1.value.length < 1 ?
    showError(pw2, `${pw2.id} must match ${pw1.id}`) :
    showSuccess(pw2);

}

function checkInputLength(input, minLength, maxLength) {
    input.value.length < minLength || input.value.length > maxLength ?
    showError(input, `${input.id} should be between ${minLength} and ${maxLength} characters`) :
    showSuccess(input)
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs([username, email, pw, confirmPW]);
    checkEmailInput(email, isEmailValid);
    checkConfirmedPWInput(pw, confirmPW);
    checkInputLength(pw, 8, 15);
    checkInputLength(username, 8, 20);
})

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

// function showError(input) {
    
// }

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }
})
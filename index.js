
const form = document.getElementById('form');
const username = document.getElementById('email');
const pw = document.getElementById('password');
const confirmPW = document.getElementById('confirm-password');
const username = document.getElementById('username');

function showError(input, message) {
    
}

function showError(input) {
    
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === "") {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }
})
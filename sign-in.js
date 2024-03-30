const emailInput = document.getElementById('email');
const emailLabel = document.querySelector('.email-label');

emailInput.addEventListener('focus', () => {
    emailLabel.classList.add('has-value');
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value === '') {
        emailLabel.classList.remove('has-value');
    }
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var showPasswordIcon = document.getElementById("show-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordIcon.src = "images/hide_pass.png"; 
    } else {
        passwordInput.type = "password";
        showPasswordIcon.src = "images/show_pass.png"; 
    }
}

document.addEventListener('selectstart',(e) =>{
    e.preventDefault();
});



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

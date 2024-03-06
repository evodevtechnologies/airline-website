document.getElementById('signup-form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    if (!emailInput.value.trim()) {
        emailInput.style.borderColor = 'red';
        event.preventDefault(); // Prevent form submission if email is empty
    }
});
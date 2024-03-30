document.getElementById('sign-up-button').addEventListener('click', function(event) {
    // Prevent default button click behavior
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    let alertIcon = document.getElementById('alert-icon');

    // Perform form validation
    if (!emailInput.value.trim() || !passwordInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        // If email or password is empty or email is invalid, display error and show alert icon
        emailInput.style.borderColor = 'red';
        passwordInput.style.borderColor = 'red';
        emailInput.placeholder = ''; // Remove error message from placeholder
        if (!alertIcon) {
            alertIcon = createAlertIcon(emailInput); // Create alert icon if it doesn't exist
        }
        alertIcon.style.display = 'inline'; // Show alert icon
    }
});

// Function to create alert icon
function createAlertIcon(element) {
    const alertIcon = document.createElement('img');
    alertIcon.src = 'images/alert.png';
    alertIcon.alt = 'Alert';
    alertIcon.title = 'Enter a valid email';
    alertIcon.id = 'alert-icon'; // Set id for easy access
    element.parentNode.appendChild(alertIcon);
    return alertIcon;
}

// Function to validate email format
function isValidEmail(email) {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org)$/i;
    return emailRegex.test(email);
}

// Event listener to remove alert icon when user starts typing again
document.getElementById('email').addEventListener('input', function() {
    const emailInput = document.getElementById('email');
    const alertIcon = document.getElementById('alert-icon');
    if (alertIcon) {
        emailInput.style.borderColor = ''; // Remove border color
        emailInput.placeholder = 'Enter your email'; // Reset placeholder
        alertIcon.style.display = 'none'; // Hide alert icon
    }
});

const passwordInput = document.getElementById('password');
const passwordStrengthPopup = document.getElementById('password-strength-popup');
const passwordCriteria = {
    minLength: document.getElementById('min-length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number'),
    specialChar: document.getElementById('special-char')
};

passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
    const isValid = validatePassword(password);

    if (isValid) {
        passwordStrengthPopup.classList.add('valid');
    } else {
        passwordStrengthPopup.classList.remove('valid');
    }

    // Reset all criteria to default (not fulfilled)
    Object.values(passwordCriteria).forEach(element => {
        element.classList.remove('valid');
    });

    // Check each criteria and update UI
    if (password.length >= 8) {
        passwordCriteria.minLength.classList.add('valid');
    }
    if (/[A-Z]/.test(password)) {
        passwordCriteria.uppercase.classList.add('valid');
    }
    if (/[a-z]/.test(password)) {
        passwordCriteria.lowercase.classList.add('valid');
    }
    if (/\d/.test(password)) {
        passwordCriteria.number.classList.add('valid');
    }
    if (/[!@#$%^&*()_+]/.test(password)) {
        passwordCriteria.specialChar.classList.add('valid');
    }

    passwordStrengthPopup.style.display = 'block';
});

function validatePassword(password) {
    // Minimum 8 characters
    // Minimum 1 Uppercase character
    // Minimum 1 Lowercase character
    // Minimum 1 Number
    // Minimum 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
}

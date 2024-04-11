document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Reset previous notifications
    document.getElementById('notification').style.right = '-450px';

    // Perform form validation
    if (!isValidEmail(emailInput.value.trim())) {
        showErrorNotification("Enter a valid email id");
        return;
    }

    if (!isValidPassword(passwordInput.value.trim())) {
        showErrorNotification("Password does not match the requirement");
        return;
    }

    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        showErrorNotification("Confirm password does not match entered password");
        return;
    }

    // Redirect to OTP authentication page after successful validation
    window.location.href = "otp_auth.html";
});

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org)$/i;
    return emailRegex.test(email);
}

// Function to validate password format
function isValidPassword(password) {
    // Regular expression to match password criteria: Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Function to show error notification
function showErrorNotification(message) {
    const notification = document.getElementById('notification');
    const header = document.getElementById('notification-header');
    const text = document.getElementById('notification-text');

    notification.className = 'notification';
    header.textContent = 'Error!';
    text.textContent = message;

    notification.style.right = '0'; // Fly in animation

    // Start horizontal line animation after notification slides out completely
    setTimeout(function() {
        const horizontalLine = document.getElementById('horizontal-line');
        horizontalLine.style.animation = 'reduceWidth 5s linear forwards';

        // Automatically close the notification after the timer line animation ends
        setTimeout(function() {
            closeNotification();
        }, 6000); // 6000 milliseconds (6 seconds) to account for the delay in slide-in animation
    }, 1000); // 1000 milliseconds (1 second) delay for slide-in animation
}

// Function to close notification
function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.right = '-450px'; // Fly out animation

    // Reset horizontal line animation
    const horizontalLine = document.getElementById('horizontal-line');
    horizontalLine.style.animation = 'none';
}
function redirectToOTPAuth() {
    // Redirect to OTP authentication page
    window.location.href = "otp_auth.html";
}

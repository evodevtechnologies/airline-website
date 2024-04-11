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

function showSuccessNotification() {
    var notification = document.getElementById('notification');
    var header = document.getElementById('notification-header');
    var text = document.getElementById('notification-text');

    notification.className = 'notification success';
    header.textContent = 'Success!';
    text.textContent = 'Login Successful';

    notification.style.right = '0'; // Fly in animation

    // Start horizontal line animation after notification slides out completely
    setTimeout(function() {
      var horizontalLine = document.getElementById('horizontal-line');
      horizontalLine.style.animation = 'reduceWidth 5s linear forwards';

      // Automatically close the notification after the timer line animation ends
      setTimeout(function() {
        closeNotification();
      }, 6000); // 6000 milliseconds (6 seconds) to account for the delay in slide-in animation
    }, 1000); // 1000 milliseconds (1 second) delay for slide-in animation
}

function showErrorNotification() {
    var notification = document.getElementById('notification');
    var header = document.getElementById('notification-header');
    var text = document.getElementById('notification-text');

    notification.className = 'notification error';
    header.textContent = 'Error!';
    text.textContent = 'Login Unsuccessful';

    notification.style.right = '0'; // Fly in animation

    // Start horizontal line animation after notification slides out completely
    setTimeout(function() {
      var horizontalLine = document.getElementById('horizontal-line');
      horizontalLine.style.animation = 'reduceWidth 5s linear forwards';

      // Automatically close the notification after the timer line animation ends
      setTimeout(function() {
        closeNotification();
      }, 6000); // 6000 milliseconds (6 seconds) to account for the delay in slide-in animation
    }, 1000); // 1000 milliseconds (1 second) delay for slide-in animation
}

function closeNotification() {
    var notification = document.getElementById('notification');
    notification.style.right = '-450px'; // Fly out animation

    // Reset horizontal line animation
    var horizontalLine = document.getElementById('horizontal-line');
    horizontalLine.style.animation = 'none';
}

function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Replace these lines with your authentication logic
    const correctEmail = "user1@gmail.com";
    const correctPassword = "User@1234";

    if (email === correctEmail && password === correctPassword) {
        showSuccessNotification();
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000); 
    } else {
        showErrorNotification();
    }
}

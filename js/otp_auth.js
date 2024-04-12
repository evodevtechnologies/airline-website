document.addEventListener('DOMContentLoaded', function() {
  const otpForm = document.getElementById('otpForm');
  const otpInputs = Array.from(otpForm.getElementsByTagName('input'));
  const submitButton = document.querySelector('button[type="submit"]');

  otpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const otp = otpInputs.map(input => input.value).join('');
    const correctOTP = '123456';

    // Function to set border color of OTP inputs
    function setBorderColor(color) {
      otpInputs.forEach(input => {
        input.style.borderColor = color;
      });
    }

    if (otp === correctOTP) {
      // Verification successful
      setBorderColor('green');
      setTimeout(function() {
        alert('Verification successful');
        window.location.href = '../html/landing-page.html'; // Redirect to index.html after 5 seconds
      }, 100); // Delay alert for 0.3 second
    } else {
      // Verification unsuccessful
      setBorderColor('red');
      setTimeout(function() {
        alert('Verification unsuccessful');
      }, 100); // Delay alert for 0.3 second
    }

    return false; // Prevent form submission
  });

  // Disable all input fields except the first one initially
  otpInputs.slice(1).forEach(input => {
    input.disabled = true;
  });

  // Function to enable subsequent input fields based on the sequence
  function enableNextInput(index) {
    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].disabled = false;
      otpInputs[index + 1].focus();
    }
  }

  // Function to disable subsequent input fields
  function disableNextInputs(index) {
    otpInputs.slice(index + 1).forEach(input => {
      input.disabled = true;
      input.value = ''; // Clear the value
    });
  }

  // Event listeners for input fields
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', function() {
      // Remove any non-numeric characters
      input.value = input.value.replace(/\D/g, '');

      const digit = input.value.trim();
      if (digit !== '') {
        enableNextInput(index);
      } else {
        disableNextInputs(index);
      }
      
      // Enable or disable the submit button based on whether all inputs are filled
      const allFilled = otpInputs.every(input => input.value.trim() !== '');
      submitButton.disabled = !allFilled;

      // Move cursor behind the digit
      input.setSelectionRange(input.value.length, input.value.length);
    });

    input.addEventListener('keydown', function(event) {
      if (event.key === 'Backspace' && input.value === '') {
        if (index > 0) {
          otpInputs[index - 1].focus();
        }
      }
    });
  });

  // Event listener for submit button click
  submitButton.addEventListener('click', function() {
    // Handle submission as needed
  });
});

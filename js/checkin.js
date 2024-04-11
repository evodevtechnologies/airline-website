window.onload = () => {
    console.log("hii");
    document.getElementById("checkin-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting via the browser
        const bookingCode = document.getElementById("checkin-booking-code").value;
        const lastName = document.getElementById("checkin-last-name").value;
        // Simulate check-in process (replace with actual backend API call)
        setTimeout(function () {
            const successMessage = document.createElement("p");
            successMessage.textContent = "Check-in successful!";
            document.getElementById("checkin-result").appendChild(successMessage);
        }, 2000); // Simulating network delay
    });
}
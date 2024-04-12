 // JSON data for booking cards
 const bookingData = [
    {
        bookingId: "FLBK123456",
        userId: "USER123",
        flightNumber: "XYZ123",
        sourceAirport: "JFK (John F. Kennedy International Airport)",
        destinationAirport: "LAX (Los Angeles International Airport)",
        numOfPassengers: 2,
        travelClass: "Business",
        dateOfTravel: "January 15, 2024",
        dateOfBooking: "January 10, 2024"
    },
    // Add more booking objects here as needed
    {
        bookingId: "FLBK123456",
        userId: "USER123",
        flightNumber: "XYZ123",
        sourceAirport: "JFK (John F. Kennedy International Airport)",
        destinationAirport: "LAX (Los Angeles International Airport)",
        numOfPassengers: 2,
        travelClass: "Business",
        dateOfTravel: "January 15, 2024",
        dateOfBooking: "January 10, 2024"
    },
    {
        bookingId: "FLBK123456",
        userId: "USER123",
        flightNumber: "XYZ123",
        sourceAirport: "JFK (John F. Kennedy International Airport)",
        destinationAirport: "LAX (Los Angeles International Airport)",
        numOfPassengers: 2,
        travelClass: "Business",
        dateOfTravel: "January 15, 2024",
        dateOfBooking: "January 10, 2024"
    },
    
];

// Function to generate booking cards
function generateBookingCards() {
    const bookingCardsContainer = document.getElementById("bookingCards");

    bookingData.forEach(booking => {
        const card = document.createElement("div");
        card.classList.add("booking-card");

        card.innerHTML = `
            <h2 align="left">${booking.bookingId}</h2>
            <div class="booking-details">
                <p><strong>User ID:</strong> ${booking.userId}</p>
                <p><strong>Flight Number:</strong> ${booking.flightNumber}</p>
                <p><strong>Source Airport:</strong> ${booking.sourceAirport}</p>
                <p><strong>Destination Airport:</strong> ${booking.destinationAirport}</p>
                <p><strong>Number of Passengers:</strong> ${booking.numOfPassengers}</p>
                <p><strong>Class:</strong> ${booking.travelClass}</p>
                <p><strong>Date of Travel:</strong> ${booking.dateOfTravel}</p>
                <p><strong>Date of Booking:</strong> ${booking.dateOfBooking}</p>
            </div>
            <div class="booking-buttons">
                <button class="booking-button"
                    onclick="upgradeHandler(this)">Upgrade Class</button>
                <button class="booking-button"
                    onclick="cancelBooking(this)">Cancel Booking</button>
            </div>
        `;

        bookingCardsContainer.appendChild(card);
    });
}

let currentBtn = null;
// Function to handle class upgrade
function upgradeHandler(button) {
  currentBtn = button;
    const bookingCard = button.closest('.booking-card');
    const upgradeDialog = document.getElementById('upgradeDialog');
    const classOptions = document.getElementById('classOptions');

    // Clear previous options
    classOptions.innerHTML = '';

    const currentClass = bookingCard.querySelector('.booking-details p:nth-child(6)').innerText.split(": ")[1];
    console.log(bookingCard.querySelector('.booking-details p:nth-child(6)').innerText.split(": ")[1]);
    const classes = ["Economy", "Business", "Executive"];

    let generate = false;
    for (let cl of classes) {
        if (cl == currentClass || generate == true) {
            generate = true;
            classOptions.innerHTML += `<option value="${cl}">${cl}</option>`;
        }
    }

    upgradeDialog.classList.add('show');
}

// Function to handle class upgrade confirmation
function upgradeClass() {
    if (confirm('Are you sure you want to upgrade this booking?')) window.open("payment.html", '_blank').focus();

    const selectedClass = document.getElementById("classOptions").value;
    const bookingCard = currentBtn.closest('.booking-card');
    const classElement = bookingCard.querySelector(".booking-details p:nth-child(6)");
    classElement.innerHTML = `<strong>Class:</strong> ${selectedClass}`;
    document.querySelector('.upgrade-dialog').classList.remove('show');
    currentBtn = null;
}

// Function to handle booking cancellation
function cancelBooking(button) {
    const bookingCard = button.closest('.booking-card');
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookingCard.remove();
        alert('You will be refunded within 7 working days.');
    }
}

// Call the function to generate booking cards
generateBookingCards();
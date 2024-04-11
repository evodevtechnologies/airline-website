
var validBook = true;
// Sample list of airports (you can replace it with your own list)


document.addEventListener("DOMContentLoaded", function () {

  //Arrival and Departure Date Pickers
  flatpickr("#departure-date", {
    dateFormat: "d-m-Y",
    minDate: "today",
  });

  flatpickr("#return-date", {
    dateFormat: "d-m-Y",
    minDate: "today",
  });

  //Displaying Passenger Details
  document.getElementById('passenger-count').addEventListener('click', function () {
    document.querySelector('.passenger-details').classList.toggle('active');
  });

  //Making an object out of form data on submit
  document.getElementById('swap-destinations-button').addEventListener('click',
    function (event) {

      // Handle the form data
      event.preventDefault();
    });
  document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if(checkForm(event)){
    const nr = document.getElementById('no-return-checkbox').value;
    const from = document.getElementById('from-destination').value;
    const to = document.getElementById('to-destination').value;
    // validateBookAFlightForm();
    if (validBook) {
      const formData = new FormData(this);
      formData.append('no-return', nr);
      formData.append('from', from);
      formData.append('to', to);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log(formObject);
      window.open('flight-list.html', '_self');
    }
  }
  });

});


const airportInputs = document.querySelectorAll(".airport-input");

airportInputs.forEach(function (airportInput) {
  const airportDropdown = airportInput.nextElementSibling;

  // Function to filter airports based on user input
  function filterAirports() {
    const searchText = airportInput.value.toLowerCase();
    const filteredAirports = airports.filter(airport => airport.toLowerCase().includes(searchText));
    displayAirports(filteredAirports);
    if (searchText.length === 0) return airportDropdown.classList.remove("active");

  }

  // Function to display filtered airports in the dropdown
  function displayAirports(airportsToShow) {
    const dropdownContent = airportsToShow.map(airport => `<div class="airport-option">${airport}</div>`).join("");
    airportDropdown.innerHTML = dropdownContent;
    airportDropdown.classList.add("active");
  }

  // Event listener for input changes
  airportInput.addEventListener("input", filterAirports);

  // Event listener for selecting an airport from dropdown
  airportDropdown.addEventListener("click", function (event) {
    if (event.target.classList.contains("airport-option")) {
      airportInput.value = event.target.textContent;
      airportDropdown.classList.remove("active");
    }
  });
  var currDestBox;
  airportInput.addEventListener("focus", () => { currDestBox = event.target; filterAirports(); }); // Show dropdown when input is focused
  document.addEventListener("click", function (event) {
    if (event.target != currDestBox && !event.target.classList.contains("airport-option")) {
      airportDropdown.classList.remove("active");
    }
  });
});


// Function to disable/enable text input based on checkbox state
function toggleTextInput() {
  var checkbox = document.getElementById("no-return-checkbox");
  var textInput = document.getElementById("return-date");

  if (checkbox.checked) {
    textInput.style.cursor = "default";
    textInput.disabled = true;
  } else {
    textInput.style.cursor = "pointer";
    textInput.disabled = false;
  }
}

//Incrementing and Decrementing passenger count on clicking respective buttons
function increment(field) {
  const input = document.getElementById(field);
  input.value = parseInt(input.value) + 1;
  updateTotalPassengers();
}

function decrement(field) {
  const input = document.getElementById(field);
  const value = parseInt(input.value) - 1;
  input.value = value >= 0 ? value : 0;
  updateTotalPassengers();
}

//Swap Source and Destination on click
document.getElementById('swap-destinations-button').addEventListener('click', function () {
  const fromDestination = document.getElementById('from-destination').value;
  const toDestination = document.getElementById('to-destination').value;
  document.getElementById('from-destination').value = toDestination;
  document.getElementById('to-destination').value = fromDestination;
});

//Update the total number of passengers after incrementing or decrementing
function updateTotalPassengers() {
  const adults = parseInt(document.getElementById('adults').value);
  const children = parseInt(document.getElementById('children').value);
  // const infants = parseInt(document.getElementById('infants').value);
  const total = adults + children;
  document.getElementById('passenger-count').textContent = total + " Passenger" + (total !== 1 ? "s" : "");
}

function checkForm(event) {
  event.preventDefault(); // prevent form submission

  const form = event.target; // get the form element

  // Loop through each input element in the form
  for (let i = 0; i < form.elements.length; i++) {
      const input = form.elements[i];

      // Check if the input is empty
      if (input.tagName.toLowerCase() ===w'input' && input.value.trim() === '' && !input.disabled) {
          alert('Please fill out all fields'); // alert appropriate message
          input.focus(); // focus on the empty input
          return false; // stop further processing
      }
  }
  return true; // allow form submission
}
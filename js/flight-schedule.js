
const validSchedule = true;


document.addEventListener("DOMContentLoaded", function () {

    //Schedule Tab
    //Making an object out of form data on submit
    document.getElementById('schedule-swap-destinations-button').addEventListener('click',
        function (event) {

            // Handle the form data
            event.preventDefault();
        });
    document.getElementById('schedule-booking-form').addEventListener('submit', function (event) {
        // validateBookAFlightForm();
        event.preventDefault();
        if(checkScheduleForm(event)){
        const from = document.getElementById('schedule-from-destination').value;
        const to = document.getElementById('schedule-from-destination').value;

        if (validSchedule) {
            const scheduleFormData = new FormData(this);
            scheduleFormData.append('from', from);
            scheduleFormData.append('to', to);
            const scheduleFormObject = {};
            scheduleFormData.forEach((value, key) => {
                scheduleFormObject[key] = value;
            });
            console.log(scheduleFormObject);
            window.open('flight-list.html', '_self');
        }
    }
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
});

//Swap Source and Destination on click (Flight Schedule Tab)
document.getElementById('schedule-swap-destinations-button').addEventListener('click', function () {
    const fromDestination = document.getElementById('schedule-from-destination').value;
    const toDestination = document.getElementById('schedule-to-destination').value;
    document.getElementById('schedule-from-destination').value = toDestination;
    document.getElementById('schedule-to-destination').value = fromDestination;
});

function checkScheduleForm(event) {
    event.preventDefault(); // prevent form submission
  
    const form = event.target; // get the form element
  
    // Loop through each input element in the form
    for (let i = 0; i < form.elements.length; i++) {
        const input = form.elements[i];
  
        // Check if the input is empty
        if (input.tagName.toLowerCase() === 'input' && input.value.trim() === '' && !input.disabled) {
            alert('Please fill out all fields'); // alert appropriate message
            input.focus(); // focus on the empty input
            return false; // stop further processing
        }
    }
    return true; // allow form submission
  }
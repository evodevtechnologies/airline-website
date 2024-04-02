

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementsByClassName("tabcontent")[0].className += " active";

document.addEventListener("DOMContentLoaded", function() {
flatpickr("#departureDate", {
  dateFormat: "d-m-Y",
  minDate: "today",
});

flatpickr("#returnDate", {
  dateFormat: "d-m-Y",
  minDate: "today",
});

document.getElementById('passengerCount').addEventListener('click', function() {
  document.querySelector('.passenger-details').classList.toggle('active');
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  console.log(formObject);
});
});

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

function updateTotalPassengers() {
const adults = parseInt(document.getElementById('adults').value);
const children = parseInt(document.getElementById('children').value);
const infants = parseInt(document.getElementById('infants').value);
const total = adults + children + infants;
document.getElementById('passengerCount').textContent = total + " Passenger" + (total !== 1 ? "s" : "");
}


const countOptions = {
  useEasing: true,
  duration: 1.5,
}

const count1 = new CountUp('MyNumber1', 0, 650000, 0, 5, countOptions);
const count2 = new CountUp('MyNumber2', 0, 135000, 0, 5, countOptions);
const count3 = new CountUp('MyNumber3', 0, 86, 0, 5, countOptions);

var observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
    console.log('Element is fully visible in screen');
    count1.start();
    count2.start();
    count3.start();
  }
}, { threshold: [1] });

observer.observe(document.querySelector("#count-up-container"));

const parallax = document.querySelector(".parallax");
const heading = document.querySelector(".heading");


const imgWidth1 = document.querySelector(".horizontal-card").offsetWidth;
const holderWidth1 = document.querySelector(".card-holder").offsetWidth;

const imgWidth2 = document.querySelectorAll(".horizontal-card")[1].offsetWidth;
const holderWidth2 = document.querySelectorAll(".card-holder")[1].offsetWidth;

document.getElementById("horizontal-scroll").style.height = "calc(" + (holderWidth1 - imgWidth1) + "px + 100vh - 20vw + 10px)";
document.getElementById("horizontal-scroll2").style.height = "calc(" + (holderWidth2 - imgWidth2) + "px + 100vh - 20vw + 10px)";

window.addEventListener('scroll', () => {

  document.getElementById("card-holder").style.transform = "translateX(-" + document.getElementById("viewport").offsetTop + "px)";
  document.getElementById("card-holder2").style.transform = "translateX(-" + document.getElementById("viewport2").offsetTop + "px)";

  let { scrollY } = window;
  heading.style.top = "calc( 50% - " + (0.65 * scrollY) + "px )";
  parallax.style.top = "calc( 50% - " + (0.5 * scrollY) + "px )";
});

window.setTimeout(loadImages, 5000);
const hero = document.querySelector(".hero");
let heroIndex = 1;
function loadImages() {

  hero.style.backgroundImage = "url(images/hero-" + heroIndex + ".jpg)";
  heroIndex++;
  if (heroIndex > 3) {
    heroIndex = 1;
  }
  window.setTimeout(loadImages, 5000);


}
const airports = [
  "JFK - John F. Kennedy International Airport",
  "LAX - Los Angeles International Airport",
  "ORD - O'Hare International Airport",
  "ATL - Hartsfield-Jackson Atlanta International Airport",
  "DFW - Dallas/Fort Worth International Airport",
  "DEN - Denver International Airport",
  "SFO - San Francisco International Airport",
  "SEA - Seattle-Tacoma International Airport",
  "LAS - McCarran International Airport",
  "MIA - Miami International Airport",
  "SIN - Singapore Changi Airport",
  "CGK - Soekarno-Hatta International Airport (Jakarta, Indonesia)",
  "JFK - John F. Kennedy International Airport (New York, USA)"
];


document.addEventListener("DOMContentLoaded", function () {
    //Making the 'bookFlight' tab active initially
    console.log("loaded");
    document.getElementsByClassName("tab-content")[0].style.display = "block";
    document.getElementsByClassName("tab-link")[0].className += " active";
  });

  //Function for opening tab on click
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
var countOptions = {
    useEasing: true,
    separator: ''
  }
  var imgWidth = document.querySelector(".horizontal-card").offsetWidth;
  var holderWidth = document.querySelector(".card-holder").offsetWidth;
  // var vpContainer = document.querySelector(".viewport-container").offsetHeight;
  console.log("hi"+"calc("+(document.getElementById("card-holder").offsetWidth - 0.5*imgWidth)+"px - 80vw)");
  
document.getElementById("container").style.height = "calc("+(holderWidth - imgWidth)+"px + 100vh - 20vw + 10px)";
// "calc("+(document.getElementById("card-holder").offsetWidth - 0.5*imgWidth)+"px-80vw)";

  
var count1 = new CountUp('MyNumber1', 0, 650000, 0, 5, countOptions)
var count2 = new CountUp('MyNumber2', 0, 135000, 0, 5, countOptions)
var count3 = new CountUp('MyNumber3', 0, 86, 0, 5, countOptions)
count1.start()
count2.start()
count3.start()

// Path: script.js
    window.onscroll = function () {
      
        document.getElementById("card-holder").style.transform = "translateX(-"+ document.getElementById("viewport-container").offsetTop+"px)";
    }
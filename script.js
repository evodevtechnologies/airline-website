var countOptions = {
    useEasing: true,
    separator: ''
  }
  
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
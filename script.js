var countOptions = {
    useEasing: true,
    separator: ''
  }
  
var count1 = new CountUp('MyNumber1', 0, 2016, 0, 5, countOptions)
var count2 = new CountUp('MyNumber2', 0, 45000, 0, 5, countOptions)
var count3 = new CountUp('MyNumber3', 0, 1234, 0, 5, countOptions)
count1.start()
count2.start()
count3.start()


window.onload = (function () {
    const vp = document.getElementByID("viewport");
    const ch = document.getElementByID("card-holder");
    });
    
    window.onscroll = function () {
        document.getElementById("card-holder").style.transform = "translateX(-"+ document.getElementById("viewport-container").offsetTop+"px)";
    }
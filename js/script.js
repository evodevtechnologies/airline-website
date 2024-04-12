

const countOptions = {
  useEasing: true,
  duration: 1.5,
}

const count1 = new CountUp('MyNumber1', 0, 650000, 0, 5, countOptions);
const count2 = new CountUp('MyNumber2', 0, 135000, 0, 5, countOptions);
const count3 = new CountUp('MyNumber3', 0, 86, 0, 5, countOptions);

window.addEventListener('scroll', () => {

  let cont = document.querySelector(".tab-container").style.height;
  if( window.scrollY > cont+1450 || window.scrollY < cont+1100){
    console.log('Element is NOT fully visible in screen');
    document.querySelector("#count-up-container").style.display = "none";
    count1.reset();
    count2.reset();
    count3.reset();
  }
  else if (window.scrollY > cont+1100) {
    console.log('Element is fully visible in screen');
    document.querySelector("#count-up-container").style.display = "flex";
    count1.start();
    count2.start();
    count3.start();
  }
  
  
});

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

  hero.style.backgroundImage = "url(../images/mahi-" + heroIndex + ".jpg)";
  heroIndex++;
  if (heroIndex > 3) {
    heroIndex = 1;
  }
  window.setTimeout(loadImages, 5000);


}
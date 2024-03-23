



const countOptions = {
  useEasing: true,
  duration: 1.5,
}

function isOnScreen(element) {
  const curTop = element.offsetTop;
  const screenHeight = window.innerHeight;
  return !(curTop > screenHeight);
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
  heading.style.top = "calc( 50% - " + (0.3 * scrollY) + "px )";
  parallax.style.top = "calc( 50% - " + (0.5 * scrollY) + "px )";
});

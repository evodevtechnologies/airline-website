window.onload = (function () {
const vp = document.getElementByID("viewport");
const ch = document.getElementByID("card-holder");
});

window.onscroll = function () {
    document.getElementById("card-holder").style.transform = "translateX(-"+ document.getElementById("viewport-container").offsetTop+"px)";
}


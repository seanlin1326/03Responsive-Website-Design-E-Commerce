// Special Countdown
let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  let futureDate = new Date("30 November 2100");
  let currentDate = new Date();
  let myData = futureDate - currentDate;
  let days = Math.floor(myData / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myData / 1000 / 60 / 60) % 24;
  let min = Math.floor(myData / 1000 / 60) % 60;
  let sec = Math.floor(myData / 1000) % 60;

  dayItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};
countDown();
setInterval(countDown, 1000);

//Scroll Back To Top
function scrollTopBack() {
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopButton.classList.add("scrollActive");
    } else {
      scrollTopButton.classList.remove("scrollActive");
    }
  };
}
scrollTopBack();
// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove('show');
    })
})
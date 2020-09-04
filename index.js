let htmlElement = document.querySelector('html');
let bodyElement = document.querySelector('body');

let navBurger = document.getElementById("navburger");
let navMenu = document.getElementById("navmenu");
let navClose = document.getElementById("navclose");
let navLink = document.querySelectorAll(".navlink");

navBurger.addEventListener("click", function(){
  navMenu.style.width = "100%";
});

navClose.addEventListener("click", function(){
  navMenu.style.width = "";
});

  navLink.forEach(nav => {
    nav.addEventListener('click', event => {
      navClose.click();
    })
  });

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

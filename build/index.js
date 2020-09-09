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


const sections = document.querySelectorAll('section');
const options = {
  rootMargin: '-50px 0px -55%',
  // threshold: 1.0
};

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      intersectionHandler(entry); 
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('.navlink.nav-active');
  const shouldBeActive = document.querySelector('.navlink[data-ref=' + id + ']');

  if (currentlyActive) {
    currentlyActive.classList.remove('nav-active');
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add('nav-active');
  }
}

let htmlElement = document.querySelector('html');
let bodyElement = document.querySelector('body');

document.getElementById("navburger").addEventListener("click", function(){
  document.getElementById("navmenu").style.width = "100%";
});

document.getElementById("navclose").addEventListener("click", function(){
  document.getElementById("navmenu").style.width = "";
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

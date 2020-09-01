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

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

var myMixin = {
  methods: {
    textScroll: function(evt, el) {
    elementPosition = el.getBoundingClientRect().top
    if (window.scrollY > elementPosition){
      el.setAttribute("style", "opacity: 1; transform: translate3d(0, -30px, 0)")
    }
    return window.scrollY > elementPosition + 50;
    },

    imageLeftScroll: function(evt, el) {
    elementPosition = el.getBoundingClientRect().top
    if (window.scrollY > elementPosition){
      el.setAttribute("style", "opacity: 1; transform: translate3d(1em, 1em, 0); box-shadow: -30px -30px #9b2c2c;")
    }
    return window.scrollY > elementPosition + 50;
    },

    imageRightScroll: function(evt, el) {
    elementPosition = el.getBoundingClientRect().top
    if (window.scrollY > elementPosition){
      el.setAttribute("style", "opacity: 1; transform: translate3d(-1em, -1em, 0); box-shadow: 30px 30px #9b2c2c;")
    }
    return window.scrollY > elementPosition + 50;
    }
  }
}

new Vue({
  el: '#about-us',
  mixins: [myMixin]
});

new Vue({
  el: '#quote',
  mixins: [myMixin]
});


let tween = gsap.to("#teman-gawe-cube", {
  rotation: 360,
  duation: 1,
  ease: Sine.easeOut,
});

cube = document.querySelector('#teman-gawe-cube');
cube.addEventListener("mouseover", function(el) {
  tween.restart();
});

gsap.to("#headline", {
  scrollTrigger: {
    trigger: "#headline",
    start: "80% 50%",
    end: "bottom 20%",
    id: "cube-id",
    scrub: 0.5,
  },
  transform: 'scale(0.7)', opacity: 1, duration: 0.8,
});

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".text-animate").forEach(text => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "top 50%",
      id: "text-id",
      // markers: true,
      scrub: 0.5,
      toggleActions: "play none none none",
    },
    y: '-2em', opacity: 1, duration: 0.8,
  });
});


gsap.utils.toArray(".image-left-animate").forEach(image => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top 70%",
      end: "top 50%",
      // markers: true,
      scrub: 0.8,
      toggleActions: "play pause none none",
    },
    x: '2em', y: '2em', boxShadow: '-30px -30px #9b2c2c', ease: Sine.easeOut,
  });
});

gsap.utils.toArray(".image-right-animate").forEach(image => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top 90%",
      end: "top 70%",
      scrub: 0.8,
      // markers: true,
      toggleActions: "play pause reverse reset",
    },
    x: '-2em', y: '-2em', boxShadow: '30px 30px #9b2c2c', ease: Sine.easeOut
  });
});

gsap.fromTo("#menu",
  { transform: 'translateX(-1000px)', opacity: 0 },
  {
    scrollTrigger: {
      trigger: "#menu",
      start: "top 70%",
      end: "top 40%",
      scrub: 0.8,
      // markers: true,
      toggleActions: "play none none none",
  }, transform: 'translateX(0)', opacity: 1, duration: 0.6, ease: Sine.easeOut }
);
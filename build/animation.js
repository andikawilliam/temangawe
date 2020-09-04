
let tween = gsap.to("#teman-gawe-cube", {
  rotation: 360,
  duration: 1,
  ease: Sine.easeOut,
});

cube = document.querySelector('#teman-gawe-cube');
cube.addEventListener("click", function(el) {
  tween.restart();
});

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".text-animate").forEach(text => {
  gsap.to(text, {
    scrollTrigger: {
      trigger: text,
      start: "top 90%",
      end: "top 60%",
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
      start: "top 80%",
      end: "top 60%",
      // markers: true,
      scrub: 0.8,
      toggleActions: "play pause none none",
    },
    y: '1em', boxShadow: '0 -10px 1px #9b2c2c', ease: Sine.easeOut,
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
    y: '-1em', boxShadow: '0 10px 1px #9b2c2c', ease: Sine.easeOut
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
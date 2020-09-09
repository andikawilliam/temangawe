gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#navcube", { 
  transform: 'scale(0)', opacity: 0 }, { 
    scrollTrigger: {
      trigger: "#navcube",
      start: "400 30%",
      end: "500 top",
      id: "nav-cube",
      markers: true,
      scrub: 0.5,
    }, transform: 'scale(1)', opacity: 1, duration: 0.8,  ease: Sine.easeOut
})

gsap.fromTo("#navtemangawe", { 
  x: '-48px', }, { 
    scrollTrigger: {
      trigger: "#navtemangawe",
      start: "400 30%",
      end: "500 top",
      id: "nav-temangawe",
      markers: true,
      scrub: 0.5,
    }, x:'0', duration: 0.8, ease: Sine.easeOut 
})

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


gsap.utils.toArray(".image-fade-up").forEach(image => {
  gsap.to(image, {
    scrollTrigger: {
      trigger: image,
      start: "top 80%",
      end: "top 60%",
      // markers: true,
      scrub: 0.8,
      toggleActions: "play pause none none",
    },
    y: '-1em', opacity: 1, ease: Sine.easeOut,
  });
});

gsap.to("#menu",
  {
    scrollTrigger: {
      trigger: "#menu",
      start: "30% 85%",
      end: "top 40%",
      scrub: 0.8,
      // markers: true,
      toggleActions: "play none none none",
  }, y: '-3em', opacity: 1, ease: Sine.easeOut }
);

// old slide animation
// gsap.fromTo("#menu",
//   { transform: 'translateX(-1000px)', opacity: 0 },
//   {
//     scrollTrigger: {
//       trigger: "#menu",
//       start: "top 70%",
//       end: "top 40%",
//       scrub: 0.8,
//       // markers: true,
//       toggleActions: "play none none none",
//   }, transform: 'translateX(0)', opacity: 1, duration: 0.6, ease: Sine.easeOut }
// );
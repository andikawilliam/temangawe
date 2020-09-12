gsap.registerPlugin(ScrollTrigger);

// background animation, only works on desktop
// gsap.fromTo("#home", { backgroundSize: "100% 120%" }, { 
//     scrollTrigger: {
//       trigger: "#home",
//       start: "center 30%",
//       end: "80% 10%",
//       // markers: true,
//       scrub: 0.5,
//     }, 
//     backgroundSize: "110% 130%"
// })

gsap.fromTo("#navcube", { transform: 'scale(0)', opacity: 0 }, { 
    scrollTrigger: {
      trigger: "#home",
      start: "center 30%",
      end: "80% 10%",
      id: "nav-cube",
      // markers: true,
      scrub: 0.5,
    }, transform: 'scale(1)', opacity: 1, duration: 0.8,  ease: Sine.easeOut
})

gsap.fromTo("#navtemangawe", { x: '-48px', }, { 
    scrollTrigger: {
      trigger: "#home",
      start: "center 30%",
      end: "80% 10%",
      id: "nav-temangawe",
      // markers: true,
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
    yPercent: '-10', opacity: 1, duration: 0.8,
  });
});


gsap.utils.toArray(".image-fade-up").forEach(image => {
  gsap.fromTo(image, { opacity: 0 }, {
    scrollTrigger: {
      trigger: image,
      start: "top 80%",
      end: "top 60%",
      // markers: true,
      scrub: 1,
      toggleActions: "play pause none none",
    },
    yPercent: '-10', opacity: 1, ease: Sine.easeOut,
  });
});

gsap.to("#menu",
  {
    scrollTrigger: {
      trigger: "#menu",
      start: "30% 85%",
      end: "top 40%",
      scrub: 1,
      // markers: true,
      toggleActions: "play none none none",
  }, yPercent: '-10', opacity: 1, ease: Sine.easeOut }
);
// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");


Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
});


Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".view" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.imageEffect(".photo ", {
  style: 5,
  config:{ onMouse:{value:1}},
  slideStyle: (setScroll) => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY / innerHeight); //Updating the scroll
    });
  },
});


Shery.imageEffect(".photos ", {
  style: 5,
  config:{ onMouse:{value:1}},
  slideStyle: (setScroll) => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY / innerHeight); //Updating the scroll
    });
  },
});

gsap.from("#nav",{
    y:-100,
    opacity:0,
    duration:1,
    delay:0.2,
});
// sidebar animation 
let tl=gsap.timeline();
tl.to("#full", {
    right: 0,
    duration: 0.7,
  });
  tl.from("#full li", {
    x: 200,
    opacity: 0,
    duration: 0.2,
    stagger: 1,
  });
  tl.from("#full i", {
    opacity: 0,
  });
  tl.pause();
  let menu = document.querySelector("#nav i");
  menu.addEventListener("click", function () {
    tl.play();
  });
  let close = document.querySelector("#full i");
  close.addEventListener("click", function () {
    tl.reverse();
  });
  
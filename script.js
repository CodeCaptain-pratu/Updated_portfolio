var tl = gsap.timeline();
// select the text of h1 inside the content div
function breakTheText() {
  let h1 = document.querySelector("#content h1");
  let h1Text = h1.textContent;
  // split the letters on the basis of nothing stored in h1Teaxt variable
  let splittedText = h1Text.split("");
  console.log(splittedText)
  let clutter = "";
  let halfValue=Math.floor(splittedText.length/2);
  splittedText.forEach(function (elem,idx) {
    if(idx<halfValue){
        clutter += `<span class="a">${elem}</span>`;
    }
    else{
        clutter += `<span class="b">${elem}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakTheText();

gsap.from("#content h1 .a",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.15,
})
gsap.from("#content h1 .b",{
    y:50,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
})

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

// consitency is the bridge between goalsa and success, built one small step at a time

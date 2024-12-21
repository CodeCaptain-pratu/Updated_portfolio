
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

  let experienceCards=[
    {
      "jobTitle":"Teacher",
      "company":"Coms-tech Academy",
      "period":"Jan 2022 - Aug 2024",
      "description":"Teaching students of different age groups and subjects.",
      "description2":"Teaching students of different age groups and subjects.",
      "description3":"Teaching students of different age groups and subjects.",
      "description4":"Teaching students of different age groups and subjects.",
    },
    {
      "jobTitle":"ceacher",
      "company":"Coms-tech Academy",
      "period":"Jan 2022 - Aug 2024",
      "description":"Teaching students of different age groups and subjects.",
      "description2":"Teaching students of different age groups and subjects.",
      "description3":"Teaching students of different age groups and subjects.",
      "description4":"Teaching students of different age groups and subjects.",
    },
    {
      "jobTitle":"aeacher",
      "company":"Coms-tech Academy",
      "period":"Jan 2022 - Aug 2024",
      "description":"Teaching students of different age groups and subjects.",
      "description2":"Teaching students of different age groups and subjects.",
      "description3":"Teaching students of different age groups and subjects.",
      "description4":"Teaching students of different age groups and subjects.",
    },
    {
      "jobTitle":"peacher",
      "company":"Coms-tech Academy",
      "period":"Jan 2022 - Aug 2024",
      "description":"Teaching students of different age groups and subjects.",
      "description2":"Teaching students of different age groups and subjects.",
      "description3":"Teaching students of different age groups and subjects.",
      "description4":"Teaching students of different age groups and subjects.",
    }
  ];
  let clutter="";
  let experienceWrapper = document.querySelector(".experienceWrapper");
  experienceCards.forEach(function(elem){
    clutter+=`<div class="work">
            <h1 class="jobTitle">${elem.jobTitle}</h1>
            <h1 class="company">${elem.company}</h1>
            <h4 class="period">${elem.period}</h4>
            <ul>
              <li>
                ${elem.description}
              </li>
              <li>
                ${elem.description2}
              </li>
              <li>${elem.description3}</li>
              <li>${elem.description4}</li>
            </ul>
          </div>`;
  });
  experienceWrapper.innerHTML=clutter;

  let cards=document.querySelectorAll(".work");
  console.log(cards);
  let next=document.querySelector(".next");
  let prev=document.querySelector(".Previous");

  let current=0;
  function updateCards(){
    cards.forEach((card,index)=>{
        if(index===current){
          card.classList.add("active");
        }     
        else{
          card.classList.remove("active");
        }
    })
  }
  updateCards();
  next.addEventListener("click",function(){
      current=(current+1)%cards.length;
      console.log(current);
      updateCards();
  })
  
  prev.addEventListener("click",function(){
    current=(current-1+cards.length)%cards.length;
    console.log(current); 
    updateCards(); 
  })

  
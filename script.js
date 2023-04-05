const questionContainer = document.querySelector(".click-event");
const btn1 =document.querySelector("#btn-1");
const btn2 =document.querySelector("#btn-2");
const response =document.querySelector("p");
const keypressContainer =document.querySelector( ".keypress");
const key =document.getElementById("key");
const menu=document.getElementById("menu");

  questionContainer.style.border ="5px dashed red";
    questionContainer.style.borderRadius = "10px";
 questionContainer.addEventListener(
   "click", ()=>{
   questionContainer.classList.toggle('question-click')
   });

   btn1.addEventListener(
   "click", ()=>{
     btn1.style.background = 'green';
     response.style.background ='green';
     response.classList.add('show-response');
   });

   btn2.addEventListener(
   "click", ()=>{
     btn2.style.background ='red';
     response.style.background ='red';
     response.classList.add('show-response');
     
   });






const mousemove=document.querySelector('.mousemove');
// console.log(mousemove);



window.addEventListener('mousemove',
 (e)=> {
  
  mousemove.style.left = e.pageX +"px";
  mousemove.style.top = e.pageY +"px";
 });
   
window.addEventListener('mousedown',
 (e)=> {
  // console.log('e');

  mousemove.style.transform='scale(2) translate  (-25% , -25%)' ;
  

 });
   
window.addEventListener('mouseup',
 (e)=> {
  // console.log('e');

  mousemove.style.transform='scale(1) translate (-50% , -50%)' ;
  

 });
   

   




// document.querySelector(body);
//  Mouvement de la souris


questionContainer.addEventListener("mouseenter",
()=>{
  questionContainer.style.background ="rgba(0,0,0,0.4)";
  // console.log("zone survollé");

});


questionContainer.addEventListener("mouseout",
()=>{
  questionContainer.style.background ="teal";
  // console.log("sort de la zone");

});

// questionContainer.addEventListener("mouseover",
// ()=>{
//   questionContainer.style.background ="teal";
//   console.log("survol");

// });

response.addEventListener("mouseover", 
()=>{
  response.style.transform="rotate(1deg)";

});


window.addEventListener("keypress",
 (e)=>{
  key.textContent=e.key;
  key.style.color="white";
  if(e.key==="z"){
    keypressContainer.style.background="blue";
  }else if (e.key==="b"){
    keypressContainer.style.background="orange"; 
  }else{
    keypressContainer.style.background="yellow";
  }
});






window.addEventListener(
  "scroll", (e)=>{
    console.log(window.scrollY);
    if(window.scrollY>100){
      menu.style.top="0px";
    }else{
      menu.style.top="-50px";
    }
  }
);
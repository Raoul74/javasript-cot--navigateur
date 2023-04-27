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
  // if(e.key==="z"){
  //   keypressContainer.style.background="blue";
  // }else if (e.key==="b"){
  //   keypressContainer.style.background="orange"; 
  // }else{
  //   // keypressContainer.style.background="teal";
  // }
});






window.addEventListener(
  "scroll", ()=>{
    // console.log(window.scrollY);
    if(window.scrollY>100){
      menu.style.top="0px";
    }else{
      menu.style.top="-50px";
    }
  }
  );
  const inputName = document.querySelector('input[type="text"]');
  // console.log(inputName);
  const select = document.querySelector("select");
  // console.log(select);
  const form = document.querySelector("form");
  let pseudo=""
  let language=""
  // console.log(form);
  


   inputName.addEventListener("input",
  (e)=>{
   console.log(e.target.value);
  } );
   inputName.addEventListener("input",
  (e)=>{
  language = e.target.value;
  } );

   inputName.addEventListener("input",
  (e)=>{
      pseudo = e.target.value;
  } );

  form.addEventListener("submit",
  (e)=>{
    e.preventDefault();
    
      if(cgv.checked) {
      
        document.querySelector("form > div").innerHTML=`<h3> pseudo :${pseudo} </h3><h4> language preféré : ${language} </h4>`;

      }else{
        alert("veillez acceptez les cgv");
      }
  });
  
  // cible.onkeydown = refFunction;















//   function sort(tab){
//     var changed;
//     do{
//         changed = false;
//         for(var i=0; i < tab.length-1; i++) {
//             if(tab[i] > tab[i+1]) {
//                 var tmp = tab[i];
//                 tab[i] = tab[i+1];
//                 tab[i+1] = tmp;
//                 changed = true;
//             }
//         }
//     } while(changed);
// }
// var tab = [5, 8, 11, 6, 1, 9, 3];
// sort(tab);
// console.log(tab);





// function sort(tab){
//   for(var i = 0; i < tab.length; i++){
//     //stocker l'index de l'élément minimum
//     var min = i; 
//     for(var j = i+1; j < tab.length; j++){
//       if(tab[j] < tab[min]){
//        // mettre à jour l'index de l'élément minimum
//        min = j; 
//       }
//     }
//     var tmp = tab[i];
//     tab[i] = tab[min];
//     tab[min] = tmp;
//   }
//   return tab;
// };

// var tab = [5, 8, 11, 6, 1, 9, 3];
// sort(tab);
// console.log(tab);




// function fibonacci(nbr) {

//   var n1 = 0;
//   var n2 = 1;
//   var somme = 0;

//   for(let i = 2; i <= nbr; i++){
//      //somme des deux derniers nombres
//      somme = n1 + n2; 

//      //assigner la dernière valeur à la première
//      n1 = n2; 

//      //attribuer la somme au dernier
//      n2 = somme; 
//   }

//   return nbr ? n2 : n1;
// }

// console.log(fibonacci(8));


// for (let i=0; i<3;i++){
//   console.log("je compte" + i)
// }

// const eleves =['jean','marc','marie']
// for(const eleve of eleves){
//   // console.log(eleve)
// }

// FOREACH 

const boxes=document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((x)=>{
  x.addEventListener("click",
  ()=>{
    x.style.transform="scale(0.7)";
    console.log(x);
  });
});


// bom  

console.log(window.innerHeight);


// confirm 
btn2.addEventListener("click",
()=>{
  confirm(" voulez vous vraiment cette réponse??");
});


// prompt
btn1.addEventListener("click",
()=>{
  let answer=prompt("entrer votre nom!");
  questionContainer.innerHTML=` <h3>bravo <b>${answer}</b></h3>`;
});


setTimeout(()=>{
  questionContainer.style.borderRadius="350px";
},2000);




// setInterval 

let interval=setInterval(()=>{
  document.body.innerHTML+=`  <div class=box>  <h2>Nouvelle boite! </h2> </div> `; },300000);

// // REMOUVE OU SUPPRIMER
// Document.body.addEventListener("click",
// (e)=> {
//   e.target.remove();
//   clearInterval(interval);
// });


// location 
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// console.log("https://www.hostinger.com");

// window.onload=()=>{
//   location.href="https://www.hostinger.com";
// };
//  console.log(navigator.userAgent);
console.log(window.history);




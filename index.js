const restart=document.getElementById('restart');
const arr=["rock","scissor","paper"];
const score1=document.getElementById("score1");
 const score2=document.getElementById("score2");
 let sc1=0;
let sc2=0;
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const p1=document.getElementById('p1');
 const p2=document.getElementById('p2');
 let turn="h";
///

function reset(event){
    sc1=0;
    turn="h";
    sc2=0;
   score1.innerHTML=`Score: ${sc1}`;
   score2.innerHTML=`Score: ${sc2}`;
   const p1=document.getElementById('p1');
   p1.innerHTML="";
   const p2=document.getElementById('p2');
   p2.innerHTML="";
   const win=document.getElementById('win');
   win.innerHTML="";
   img1.style.transform="scale(1)";
   img2.style.transform="scale(1)";

}
//
const buttons=document.getElementById('buttons');
//
function start(event){
       if(event.target.tagName=="BUTTON"){
              win.innerHTML="";
               img1.style.transform="scale(1)";
               img2.style.transform="scale(1)";
               p1.innerHTML="";
               p2.innerHTML="";
          //
           p1.innerHTML=`${event.target.id}`;
           buttons.removeEventListener('click',start);
          //
         setTimeout(()=>{
          let idx=Math.floor(Math.random()*17);
          idx=idx%3;
          p2.innerHTML=`${arr[idx]}`;
          //winner decide;
          const win=document.getElementById('win');
          win.innerHTML="";
          if(p1.innerHTML===p2.innerHTML) {
               win.innerHTML="Match Draw";
               img1.style.transform="scale(1)";
               img2.style.transform="scale(1)";
          }
          else if(p1.innerHTML=="rock"){
               if(p2.innerHTML=="paper") {sc2++; score2.innerHTML=`Score: ${sc2}`; win.innerHTML="You Lose";img1.style.transform="scale(0.8)";img2.style.transform="scale(1.3)";}
               else{sc1++; score1.innerHTML=`Score: ${sc1}`; win.innerHTML="You Win";img1.style.transform="scale(1.3)";img2.style.transform="scale(0.8)";}
          }
          else if(p1.innerHTML=="paper"){
               if(p2.innerHTML=="rock") {sc1++; score1.innerHTML=`Score: ${sc1}`; win.innerHTML="You Win";img1.style.transform="scale(1.3)";img2.style.transform="scale(0.8)";}
               else{sc2++; score2.innerHTML=`Score: ${sc2}`; win.innerHTML="You Lose";img1.style.transform="scale(0.8)";img2.style.transform="scale(1.3)";}
          }
          else{//p1.innerhtml==scissor
             if(p2.innerHTML=='rock'){sc2++; score2.innerHTML=`Score: ${sc2}`; win.innerHTML="You Lose";img1.style.transform="scale(0.8)";img2.style.transform="scale(1.3)";}
             else{sc1++; score1.innerHTML=`Score: ${sc1}`; win.innerHTML="You Win";img1.style.transform="scale(1.3)";img2.style.transform="scale(0.8)";}
          }
          buttons.addEventListener('click',start);
         },2000)
     }
}

buttons.addEventListener('click',start);

//restart;
restart.addEventListener('click',reset);
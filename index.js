
const start=document.getElementById('start');
let turn="h";
const arr=["rock","scissor","paper"];
///

start.addEventListener('click',()=>{
  if(turn=="h"){  
    const buttons=document.getElementById('buttons');
    buttons.addEventListener('click',(event)=>{
        if(event.target.tagName=='BUTTON'){
           const p1=document.getElementById('p1');
           p1.innerHTML="";
           p1.innerHTML=`${event.target.id}`;
        }
    })
    turn="a";
  }
  else{
        let idx=Math.floor(Math.random()*3); 
        const p2=document.getElementById('p2');
        p2.innerHTML=`${arr[idx]}`;
        console.log(arr[idx]);
        turn="h";
  }
})
let heading=document.querySelector("h1");
let btn=document.querySelectorAll(".box");
let b1=document.querySelector("h2");
let gm=document.querySelector(".h3");
let t=document.querySelector(".win");
let val=false;
function timeout(color,delay,nextcolor){
    setInterval(()=>{
        heading.style.color=color;
        if(nextcolor){
            nextcolor();
        }
    },delay);
}
gm.addEventListener("click",()=>{
    for(l of btn){
        l.innerText="";
        t.innerText="";
        l.disabled=false;
    }
})
b1.addEventListener("click",function(){
    timeout("red",1000,()=>{
        timeout("orange",2000,()=>{
            timeout("maroon",3000)
        })})});


const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

for(l of btn){
    l.addEventListener("click",function(){
        if(val==false){
            this.innerText="x";
            val=true;
        }
        else{
            this.innerText="o";
            val=false;
        }
        this.disabled=true;
        check();
    });
}
const disable=()=>{
    for(l of btn){
        l.disabled=true;
    } 
}
const check=()=>{
    for(let j of win){
        if(btn[j[0]].innerText!="" && btn[j[1]].innerText!="" && btn[j[2]].innerText!=""){
            if(btn[j[0]].innerText===btn[j[1]].innerText && btn[j[1]].innerText==btn[j[2]].innerText){
                t.innerText="!! CONGRATLATIONS YOU ARE WINNER";
                disable();
            }
        }
    }
}


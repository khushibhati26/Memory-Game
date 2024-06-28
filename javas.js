let gameseq=[];
let userseq=[];
let btns=["yellow","green","blue","red"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false)
    {console.log("game started");
started=true;
levelup();
}
    });
    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){btn.classList.remove("flash");},250);
    }
    function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){btn.classList.remove("userflash");},250);
    }

    function levelup(){
        userseq=[];
        level++;
        h2.innerText=`Level ${level} `;
let randindx=Math.floor(Math.random()*3);
let randclr=btns[randindx];
let randbtn=document.querySelector(`.${randclr}`);
gameseq.push(randclr);
console.log(gameseq);
console.log(randindx);
console.log(randclr);
console.log(randbtn);
btnFlash(randbtn);
    }
    function checkans(indx){
        console.log("curr level ",level);
        
        if(userseq[indx]==gameseq[indx]){
            if(userseq.length==gameseq.length){
                setTimeout(levelup,1000);
            }
         } else{
           h2.innerHTML=`GAME OVER &#128529 !! Your score <b>${level}</b><br> Press any key to start `; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor="white";},150); 
        reset();  
        }

    }
    
    function btnpress(){
        let btn=this;
        userFlash(btn);
        userclr=btn.getAttribute("id");
        userseq.push(userclr);
        checkans(userseq.length-1);
    }
    let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
    function reset(){
        started =false;
        gameseq=[];
        userseq=[];
        level=0;
    }
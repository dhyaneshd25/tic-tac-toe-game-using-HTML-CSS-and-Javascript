
let mu=new Audio("sw.mp3");
let win=new Audio("win.mp3");
let nd=new Audio("ng.mp3");
let a=[-1,-1,-1,-1,-1,-1,-1,-1,-1]
let co=1;
let arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1]
//winner of game
function winner(ar){
    let ans="Draw";
    if(ar[0]==1 && ar[1]==1 && ar[2]==1){
        let cx1=document.getElementById("li1");
        cx1.style="display:inline-block;";
        ans="Human";
        setTimeout(() => {cx1.style="display:none";ret(arr,"c");}, 2000);
    }else if(ar[3]==1 && ar[4]==1 && ar[5]==1){
        let cx2=document.getElementById("li1");
        cx2.style="display:inline-block;top:225px";
        ans="Human";
        setTimeout(() => {cx2.style="display:none;top:200px";ret(arr,"c");}, 2000);
    }else if(ar[6]==1 && ar[7]==1 && ar[8]==1){
        let cx1=document.getElementById("li1");
        cx1.style="display:inline-block;top:400px";
        ans="Human";
        setTimeout(() => {cx1.style="display:none;top:400px";ret(arr,"c");}, 2000);
    }else if(ar[0]==1 && ar[4]==1 && ar[8]==1){
        let cx1=document.getElementById("li3");
        cx1.style="display:inline-block;";
        ans="Human";
        setTimeout(() => {cx1.style="display:none";ret(arr,"c");}, 2000);
    }else if(ar[2]==1 && ar[4]==1 && ar[6]==1){
        let cx1=document.getElementById("li");
        cx1.style="display:inline-block;";
        ans="Human";
        setTimeout(() => {cx1.style="display:none";ret(arr,"c");}, 2000);
    }else if(ar[0]==1 && ar[3]==1 && ar[6]==1){
         let cx1=document.getElementById("li2");
         cx1.style="display:inline-block;";
         ans="Human";
         setTimeout(() => {cx1.style="display:none";ret(arr,"c");}, 2000);
    }else if(ar[1]==1 && ar[4]==1 && ar[7]==1){
        ans="Human";
        let cx7=document.getElementById("li2");
        cx7.style="display:inline-block;left:26vw";
        setTimeout(() => {cx7.style="display:none";ret(arr,"c");}, 2000);
    }else if(ar[2]==1 && ar[5]==1 && ar[8]==1){
        let cx1=document.getElementById("li2");
        cx1.style="display:inline-block;left:40vw";
        ans="Human";
        setTimeout(() => {cx1.style="display:none";ret(arr,"c");}, 2000);
    }else if(ar[0]==0 && ar[1]==0 && ar[2]==0){
        let cx1=document.getElementById("li1");
        cx1.style="display:inline-block;";
        ans="Computer";
        setTimeout(() => {cx1.style="display:none";ret(a,".cc");}, 2000);
    }else if(ar[3]==0 && ar[4]==0 && ar[5]==0){
        let cx1=document.getElementById("li1");
        cx1.style="display:inline-block;top:225px";
        ans="Computer";
        setTimeout(() => {cx1.style="display:none";ret(a,".cc");}, 2000);
    }else if(ar[6]==0 && ar[7]==0 && ar[8]==0){
        let cx1=document.getElementById("li1");
        cx1.style="display:inline-block;top:400px";
        ans="Computer";
        setTimeout(() => {cx1.style="display:none";ret(a,".cc");}, 2000);
    }else if(ar[0]==0 && ar[4]==0 && ar[8]==0){
        let cx1=document.getElementById("li3");
        cx1.style="display:inline-block;";
        ans="Computer";
        setTimeout(() => {cx1.style="display:none";ret(a,".cc");}, 2000);
    }else if(ar[2]==0 && ar[4]==0 && ar[6]==0){
        let cx1=document.getElementById("li");
        cx1.style="display:inline-block";
        ans="Computer";
        setTimeout(() => {cx1.style="display:none";ret(a,".cc");}, 2000);
    }else if(ar[0]==0 && ar[3]==0 && ar[6]==0){
        let cx1=document.getElementById("li2");
        cx1.style="display:inline-block";
        ans="Computer";
        setTimeout(() => {cx1.style="display:none";ret(a,".cc");}, 2000);
    }else if(ar[1]==0 && ar[4]==0 && ar[7]==0){
        let cxx7=document.getElementById("li2");
        cxx7.style="display:inline-block;left:26vw";
        setTimeout(() => {cxx7.style="display:none"; ret(a,"cc");}, 2000);
        ans="Computer";   
    }else if(ar[2]==0 && ar[5]==0 && ar[8]==0){
        let cxx8=document.getElementById("li2");
        cxx8.style="display:inline-block;left:40vw";
        setTimeout(() => {  cxx8.style="display:none";  ret(a,"cc");}, 2000);
        ans="Computer";
    }
    return ans;
}

// for player vs computer
let b2=document.getElementById("btn2")
b2.addEventListener('click',()=>{
    let b1=document.getElementById("btn1");
    b1.style ="display:none";
    b2.style ="display:none";
    let b3=document.getElementById("btn3");
    b3.style=`
    display:block;
    width: 25vw;
    height:9vw;
    right:51vw;
    top:150px;`;
    let b5=document.getElementById("btn5");
    b5.style=`
   display:block;
    width: 25vw;
    height:9vw;
    right:51vw;
    top:400px;
 
`;
})

let bs=document.getElementById("btn3");
bs.addEventListener("click",()=>{
    let va=document.getElementById("t");
    va.style= `
    display:block;
    background-color:transparent;
    width:35vw;
    height:20vw;
    top:1vw;
    left:12vw;
    animation: ttrav;
animation-duration:1s;
animation-delay: 0s;
animation-iteration-count: 1;
    ` ;
    let temp4=document.getElementById("btn4");
    temp4.style=`
    display:block;
    width: 25vw;
    height:9vw;
    right:60vw;
    top:520px;    animation: rets;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 0s;`;
    let temp5=document.getElementById("btn5");
    temp5.style=`
    display:block;
    width: 25vw;
    height:9vw;
    right:30vw;
    top:520px;
    animation: rets;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-delay: 0s;
  `
    bs.style="display:none;"
})


function compd(arr){
    let score =-Infinity
    let index=-1
    let  moves=calculatePossibleMoves(arr)
    for( let  i=0;i<moves.length;i++){
        let  bd=makeMove(arr,moves[1],0)
        let  tempscore=findscore(bd)
        if(tempscore>=score){
            score=tempscore
            index =moves[i]
        }
    }
    return index
}

function findscore(borad){
    let score=-Infinity;
// row
let ck=0;
for( let  i=0;i<3;i++){
if(borad[i]==1){
   ck++
}
}
if(ck>=score){
    score=ck;
}
ck=0;
for( let  i=3;i<6;i++){
    if(borad[i]==1){
        ck++
    }
    }
    if(ck>=score){
        score=ck;
    }
    ck=0;
    for( let  i=6;i<9;i++){
        if(borad[i]==1){
            ck++
        }
        }
        if(ck>=score){
            score=ck;
        }
    //column
    ck=0;
for( let i=0;i<9;i=i+3){
if(borad[i]==1){
    ck++
}
}
if(ck>=score){
    score=ck;
}
ck=0;
for( let  i=1;i<9;i=i+3){
    if(borad[i]==1){
        ck++
    }
    }
    if(ck>=score){
        score=ck;
    }
    ck=0;
    for( let  i=2;i<9;i=i+3){
        if(borad[i]==1){
            ck++
        }
        }
        if(ck>=score){
            score=ck;
        }
        ck=0;
//diagonals
 
 if(arr[0]==1 || arr[4]==1 || arr[6]==1){
    ck++
 }
 if(ck>=score){
    score=ck;
}
ck=0;
 if(arr[2]==1 || arr[4]==1 || arr[6]==1){
    ck++
 }
 if(ck>=score){
    score=ck;
}
ck=0;
return score
}
function calculatePossibleMoves(board) {
    const possibleMoves = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === -1) { // Assuming -1 represents an empty cell
            possibleMoves.push(i);
        }
    }
    return possibleMoves;}

function makeMove(arr, moveIndex, player) {
    const newBoard = arr.slice(); // Copy the board
    newBoard[moveIndex] = player; // Make the move
    return newBoard;
}





function chk(i){
   let d=i.id;
   let strr=String(d[d.length-1]);
   let nub=Number(strr);
   let ans=false;
   if(arr[nub]!=-1){
    ans=true;
   }
    return ans;
}


let tab=document.querySelectorAll(".c");

Array.from(tab).forEach((it)=>{
    let f=it.id;
     let e=document.getElementById(f);
    e.addEventListener("click",()=>{
        mu.play();
      if(chk(it)){
        let te=document.getElementById("s");
        te.style="display:block";
        te.innerText = "Already marked"
        setTimeout(()=>{
            te.style="display:none";
        },1000);
      }else{
        if(winner(arr)!="Draw"){
            nd.play();
         let mm=document.getElementById("s");
         mm.style="display:block";
         mm.innerText="Draw";
         setTimeout(() => {
            mm.style="display:none"; 
            ret(arr,".c");
            co=1;
         }, 5000);
            return;}
        let j=it.id;
        let strrr=String(j[j.length-1])
        let jj=Number(strrr);
        arr[jj]=1;
        let ele=document.getElementById(j);
        ele.style=`background-image:url("x.png");
        background-size:cover;background-position:center;`;
        if(winner(arr)==="Human"){
            let te1=document.getElementById("s");
            te1.style="display:block";
            te1.innerText="You win";
             win.play();
             let winn=document.getElementById("wini")
             winn.style="display:block";
            setTimeout(() => {
                te1.style="display:none";   
                winn.style="display:none";
                ret(arr,".c")
                co=1;
            }, 700);
            return;
        }
        if(co==5 && winner(arr)==="Draw"){
            nd.play();
            let w=document.getElementById('s');
            w.style="display:block";
            w.innerText="Draw";
          setTimeout(() => {
            w.style="display:none";
            ret(arr,".c");
            co=1;
          }, 5000);
            return;
           }
 setTimeout(() => {
    if(co<=4){
            mu.play();
        let cp=compd(arr);
        console.log(cp)
        arr[cp]=0;
        let s=String(cp);
        s='b'+s;
        let el=document.getElementById(s);
        el.style=`background-image:url("o.png");
        background-size:cover;background-position:center;`;
        if(winner(arr)==="Computer"){
            let te2=document.getElementById("s");
            nd.play();
            te2.style="display:block";
            te2.innerText="Computer Win ";
           setTimeout(() => {
                te2.style="display:none";
                ret(arr,".c");
                co=1;
            }, 3000);
            return;
        }
        } co++;
        let spa=document.getElementById("s");
        spa.style="display:block;";
        spa.innerText="Your Turn";
        setTimeout(() => {
            spa.style="display:none;";  
        }, 2000);
    }, 400);
      }
  })
})


// for player vs player

 let player_vs_player=document.getElementById("btn1");
 player_vs_player.addEventListener('click',()=>{
     let s2=document.getElementById("btn7").style="display:block;right:51vw;top:150px;";
     let b=document.getElementById("btn5").style=`display:block;right:51vw;top:400px;   `;
     let compb=document.getElementById("btn2").style="display:none";
     player_vs_player.style ="display:none";
 })
 
 let start2=document.getElementById("btn7");
 start2.addEventListener("click",()=>{
     let tb2=document.getElementById("tt").style=`display:block;background-color:transparent;top:1vw;animation: ttrav;
     animation-duration:1s;
     animation-delay: 0s;
     animation-iteration-count: 1;`;
     let r2_b=document.getElementById("btn6").style=`display:block;top:520px;    animation: rets;
     animation-duration: 1s;
     animation-iteration-count: 1;
     animation-delay: 0s;`;
     let back_b=document.getElementById("btn5").style=`display:block;top:520px;  animation: rets;
     animation-duration: 1s;
     animation-iteration-count: 1;
     animation-delay: 0s; `;
     start2.style="display:none;"
 })
 
 // logic for player vs player part
 

 let turn=1;
 let count2=1;
 // let us consider  player 1 = Human   and   Player 2= Computer
 // adding event listener to all element (block in table)
 let select2=document.getElementsByClassName("cc");
 Array.from(select2).forEach((element)=>{
     let get_id=element.id;
     let ele=document.getElementById(get_id);
     ele.addEventListener("click",()=>{
        mu.play();
         let temp_str=String(get_id[get_id.length-1])
         let last=Number(temp_str);
         if(a[last]==-1){
         if(turn==1){
            let spa=document.getElementById("s");
            spa.style="display:block;";
            spa.innerText="Next Turn Player 2";
            setTimeout(() => {
                spa.style="display:none;";  
            }, 2000);
             a[last]=1;
             turn=0;
             ele.style=`background-image:url("x.png");
             background-size:cover;background-position:center;
             `;
             count2++;
         }else{
             a[last]=0;
             turn=1;
             let spaa=document.getElementById("s");
             spaa.style="display:block;";
             spaa.innerText="Next Turn PLayer 1";
             setTimeout(() => {
                 spaa.style="display:none;";  
             }, 2000);
             ele.style=`background-image:url("o.png");
             background-size:cover;background-position:center;`;
             count2++;
         }}else{
             let span=document.getElementById("s");
             span.style="display:block";
             span.innerText = "Already marked"
             setTimeout(()=>{
                 span.style="display:none";
             },2000);    
         }
         if(winner(a)=="Human"){
             let span=document.getElementById("s");
             win.play();
             span.style="display:block";
             span.innerText = "Player 1 Win";
             let winn=document.getElementById("wini")
             winn.style="display:block";
             setTimeout(()=>{
                 span.style="display:none";
                 winn.style="display:none";
                 ret(a,".cc");
                 count2=1;
             },2000);
             turn=1;
             return;
         }
        else if(winner(a)=="Computer"){
         let span=document.getElementById("s");
         win.play();
  
         span.style="display:block";
         span.innerText = "Player 2 Win"
       let winn=document.getElementById("wini")
       winn.style="display:block";
         setTimeout(()=>{
             span.style="display:none";
             winn.style="display:none";
             turn=1;
             ret(a,".cc");
             count2=1;
         },2000);
            return;
         }
         else if(count2==10 && winner(a)=="Draw"){
             let span=document.getElementById("s");
             nd.play();
             span.style="display:block";
             span.innerText = "Game Draw"
             setTimeout(()=>{
                 span.style="display:none";
                 turn=1;
                 ret(a,".cc");
                  count2=1;
             },2000);
            return;
         }
     })
 })
//end for computer vs computer


//reset all
function ret(aa,sstt){
    for(let i=0;i<9;i++){
    aa[i]=-1;
        }
        turn=1;
let gettq=document.querySelectorAll(sstt);
    Array.from(gettq).forEach((mtq)=>{
        let qiidd=mtq.id;
        let qelel=document.getElementById(qiidd).style="background-color:transparent;"
})
}


//reset player vs player
let r=document.getElementById("btn4")
r.addEventListener('click',()=>{
co=1;
turn=1;
ret(arr,".c");
})


// reset for player vs player
let rrs=document.getElementById("btn6");
rrs.addEventListener('click',()=>{
    ret(a,".cc");
    count2=1;
})

//back button
let Bv=document.getElementById("btn5");
Bv.addEventListener('click',()=>{
    let s=document.getElementById("btn3");
    s.style="display:none"
    let sf=document.getElementById("btn7");
    sf.style="display:none"
    let ss=document.getElementById("btn1");

    

    let sss=document.getElementById("btn2");



    ss.style="top:-120px;animation-delay:0s;";
    sss.style="right:95vw;animation-delay:0s;";
setTimeout(() => {

     ss.style="top:110px;animation-delay:0s;";
     sss.style="right:33vw;animation-delay:0s;"   
      
}, 1000);

    Bv.style="display:none;"
    let tab=document.getElementById("t").style="display:none";
    let tab1=document.getElementById("tt").style="display:none";
    let res=document.getElementById("btn4").style="display:none";
    let rees=document.getElementById("btn6").style="display:none";
    co=1;
    count2=1;
    turn =1;
    ret(a,".c");
    ret(arr,".cc");
})


setTimeout(() => {
    let g=document.getElementById("hd").style=" position:fixed;top:2vw;right:6vw;"
    let bbb1=document.getElementById("btn1").style="top:110px";
    let bbb2=document.getElementById("btn2").style="right:33vw";
}, 5000);


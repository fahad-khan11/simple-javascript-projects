let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

function genCompChoice(){
    const option = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3)
    return option[randIdx];
}

function drawGame(){
    console.log("Game was draw")
    msg.innerText = "Game was draw! playAgain!"
}

function showWinner(userWin,userChoice,compChoice){
    if(userWin===true){
        userScore++
        userScorePara.innerText=userScore
        console.log("you win!");
        msg.innerText = `you win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++
        compScorePara .innerText = compScore
        console.log("you lose!");
        msg.innerText = `you loose!Your ${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor="red";
    }
}

function playGame(userChoice){
    console.log("user choice=",userChoice);   
    compChoice = genCompChoice();
    console.log("comp choice=",compChoice);  
    if(userChoice===compChoice){
        drawGame();
    }
    else{ 
        let userWin = true;
        if(userChoice==="rock"){
            userWin =compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin =compChoice==="scissor"?false:true;
        }
        else{
            userWin =compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach(function(choice){
    choice.addEventListener("click",function(){
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});
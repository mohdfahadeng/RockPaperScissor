let userScore = document.querySelector("#user-score");
let compScore= document.querySelector("#comp-score");

let usercore = 0;


let compcore=0;

let choices = document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");

const drawGame = () =>{
    console.log("game is draw");
    msg.innerText="DRAW";
    msg.style.backgroundColor = "black";
    
};

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    
    return options[ranIdx];
};

const playGame = (userChoice) =>{
    console.log("userchoice = ", userChoice);
    
    const compChoice = genCompChoice();
    console.log("compchoice = ", compChoice);

    if (userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"? false:true;

        }
        else if(userChoice==="scissor"){
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,  compChoice);

    }



};

choices.forEach((choice) => {
    let userChoice = choice.getAttribute("id");
    choice.addEventListener("click",() =>{
        
        playGame(userChoice);
    });
});

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("you win");
        msg.innerText=`YOU WIN. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        usercore++;
        userScore.innerHTML =usercore;

    }
    else{
        console.log("you loose");
        msg.innerText=`YOU LOOSE.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compcore++;
        compScore.innerText= compcore;
}

};
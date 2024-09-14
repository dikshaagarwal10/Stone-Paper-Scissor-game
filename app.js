let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];


};
const drawGame = ()=>{
   
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor ="blue";

};

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScoreP.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScoreP.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame=(userChoice) =>{
    console.log("user choice = ",userChoice);
    const compChoice =genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors paper
            userWin= compChoice==="paper"? fales: true;
        }else if(userChoice==="paper"){
            //rock scissor
            userWin= compChoice==="scissors"? false: true;
        }else{
            //rock paper
            userWin= compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }



};
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);

    });
});
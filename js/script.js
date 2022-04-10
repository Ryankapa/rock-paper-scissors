let playerScore = 0, computerScore = 0, draw = 0;
let winnerName;
let roundNumber = 1;


const startButton = document.querySelector("#startButton");
startButton.addEventListener('click', () => {
    PlayGame();
});

function ComputerPlay(){
    let listOfComputerChoices = ["rock", "paper", "scissors"];
    const rand_min = 0, rand_max = 3;
    let randomResult = Math.random() * (rand_max - rand_min) + rand_min;
    let floorRandomResult = Math.floor(randomResult);
    return listOfComputerChoices[floorRandomResult];
}



function PlayerSelection(move){
    return move.toLowerCase();
}



function PlayRound(playerSelection, computerSelection){
    //Display player and computer selections

    
    //check if draw
    if(playerSelection === computerSelection){
        return "draw";
    }
        

    //check if player lose the round and how
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "computerWon";
    }
        
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "computerWon";
    }
        
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "computerWon";
    }
        
    
    //check if player won the round and how        
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "playerWon";
    }
        
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "playerWon";
    }
        
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "playerWon";
    }
        

    //If none of the above expressions were true, print at the console that an error has occurred
    else{
        return "gameError";
    }
}


//update global variables with last round score
function UpdateScoreboard(winner){
    if(winnerName === "playerWon")
        playerScore++;
    else if(winnerName === "computerWon")
        computerScore++;
    else draw++;
}

//Add scoreboard to the screen
function DisplayScoreboard(){

    //Check if scoreboard screen already exists
    let scoreboardExists = document.getElementById("scoreboardContainer");
    if(!scoreboardExists){
        //Adding scoreboard div to the screen
    
        const scoreboardContainer = document.createElement("div");
        scoreboardContainer.id = "scoreboardContainer";
        body.appendChild(scoreboardContainer);

        //creating scoreboard text
        const scoreboardPara = document.createElement("p");
        scoreboardPara.textContent = `Player score ${playerScore} Computer score ${computerScore}`;
        scoreboardContainer.appendChild(scoreboardPara);
    }
    else{
        //Remove old element from the screen
        const oldScoreboardContainer = document.getElementById("scoreboardContainer");

        oldScoreboardContainer.remove();    

        const scoreboardContainer = document.createElement("div");
        scoreboardContainer.id = "scoreboardContainer";
        body.appendChild(scoreboardContainer);

        //creating scoreboard text
        const scoreboardPara = document.createElement("p");
        scoreboardPara.textContent = `Player score ${playerScore} Computer score ${computerScore}`;
        scoreboardContainer.appendChild(scoreboardPara);
    }
    
}



//DOM
function PlayGame(){
    


    const body = document.querySelector("body");
    
    //Delete start container
    const startContainer = document.querySelector("#startContainer");
    startContainer.parentNode.removeChild(startContainer);

    //create container with content
        //Creating gameContainer div element
    const gameContainer = document.createElement("div");
    gameContainer.id = "gameContainer";
    body.appendChild(gameContainer);
    
        //Creating paragraph that requests for user move
    const userMovePara = document.createElement("p");
    userMovePara.textContent = "Please choose your move: ";
    userMovePara.style.textAlign = "center";
    userMovePara.style.padding = "16px";
    gameContainer.appendChild(userMovePara);

        //Creating buttons div with rock, paper, scissors buttons under the gameContainer div
    const buttonsContainer = document.createElement("div");
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    buttonsContainer.id = "buttons";

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    rockButton.id = "rock";
    rockButton.classList.add("gameButton");
    paperButton.id = "paper";
    paperButton.classList.add("gameButton");
    scissorsButton.id = "scissors";
    scissorsButton.classList.add("gameButton");

    gameContainer.appendChild(buttonsContainer);
    buttonsContainer.appendChild(rockButton);
    buttonsContainer.appendChild(paperButton);
    buttonsContainer.appendChild(scissorsButton);
        
        //Adding event listeners to the buttons
    const buttons = document.querySelectorAll(".gameButton");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            winnerName = PlayRound(PlayerSelection(button.id), ComputerPlay());
            UpdateScoreboard(winnerName);
            DisplayScoreboard();
            roundNumber++;
        });
    });
}
    
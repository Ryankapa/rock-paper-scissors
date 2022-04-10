let playerScore = 0, computerScore = 0, draw = 0;
let winnerName, currentRoundWinner, gameOver = false;

const body = document.querySelector("body");

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
    //check if draw
    if(playerSelection === computerSelection){
        return;
    }
    
    //check if player lose the round
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return "computerWonRound";
    }
        
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "computerWonRound";
    }
        
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "computerWonRound";
    }
        
    //check if player won the round     
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "playerWonRound";
    }
        
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "playerWonRound";
    }
        
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "playerWonRound";
    }
}


//update global variables with last round score
function UpdateGameScore(roundWinner){
    if(roundWinner === "playerWonRound")
        playerScore++;
    else if(roundWinner === "computerWonRound")
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

function CheckWinnerName(){
    if(playerScore >= 5)
        winnerName = "Player"
    else
        winnerName = "Computer"
}

function CheckGameScore(){
    if(playerScore >= 5 || computerScore >= 5){
        gameOver = true;
        CheckWinnerName();
    }
}

function StartGame(pressedButton){
    currentRoundWinner = PlayRound(PlayerSelection(pressedButton), ComputerPlay());
    UpdateGameScore(currentRoundWinner);
    CheckGameScore();
}

function EndGame(){
    //Remove game container from the document
    const gameContainer = document.querySelector("#gameContainer");
    gameContainer.remove();

    //Remove scoreboard container from the document
    const scoreboardContainer = document.querySelector("#scoreboardContainer");
    scoreboardContainer.remove();

    //Add End Game Container
    const endGameDiv = document.createElement("div");
    endGameDiv.id = "endGameDiv";
    
    body.appendChild(endGameDiv);

    //Create End game paragraph and attach it to endGameDiv
    const endGamePara = document.createElement("p");
    endGamePara.textContent = `Game over winner is: ${winnerName}`;
    endGameDiv.appendChild(endGamePara);
}

//DOM
function PlayGame(){
    
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
            if(gameOver === false){
                StartGame(button.id);
                if(gameOver === false)
                    DisplayScoreboard();
                else
                    EndGame();
            }
        });
    });
}
    
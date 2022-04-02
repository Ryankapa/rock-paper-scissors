function ComputerPlay(){
    let listOfComputerChoices = ["rock", "paper", "scissors"];
    const rand_min = 0, rand_max = 3;
    let randomResult = Math.random() * (rand_max - rand_min) + rand_min;
    let floorRandomResult = Math.floor(randomResult);
    return listOfComputerChoices[floorRandomResult];
}



function PlayerSelection(){
    let playerInput = prompt("Print your move: [Rock | Paper | Scissors]");
    return playerInput.toLowerCase();
}



function PlayRound(playerSelection, computerSelection){
    //Display player and computer selections
    document.write(`Player  |   Computer:       ${playerSelection}    |   ${computerSelection}:         Result: `);

    
    //check if draw
    if(playerSelection === computerSelection){
        document.write("Draw!");
        return "draw";
    }
        

    //check if player lose the round and how
    else if(playerSelection === "rock" && computerSelection === "paper"){
        document.write("Player lose! Paper beats rock");
        return "computerWon";
    }
        
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        document.write("Player lose! rock beats scissors");
        return "computerWon";
    }
        
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        document.write("Player lose! scissors beats paper");
        return "computerWon";
    }
        
    
    //check if player won the round and how        
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        document.write("Player won! rock beats paper");
        return "playerWon";
    }
        
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        document.write("Player won! scissors beats paper");
        return "playerWon";
    }
        
    else if(playerSelection === "paper" && computerSelection === "rock"){
        document.write("Player won! paper beats rock");
        return "playerWon";
    }
        

    //If none of the above expressions were true, print at the console that an error has occurred
    else{
        document.write("an error has occurred");
        return "gameError";
    }
 }

 

 function Game(){
    let playerScore = 0, computerScore = 0;
    let currentRoundResult;
    for(let i = 0 ; i < 5 ; i++){
        currentRoundResult = PlayRound(PlayerSelection(), ComputerPlay());
        if(currentRoundResult === "computerWon")
            computerScore++;
        else if(currentRoundResult === "playerWon")
            playerScore++;
    }
    console.log("player score= " + playerScore + " | computer score= " + computerScore);
}

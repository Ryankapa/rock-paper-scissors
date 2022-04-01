function ComputerPlay(){
    let listOfComputerChoices = ["Rock", "Paper", "Scissors"];
    const rand_min = 0, rand_max = 3;
    let randomResult = Math.random() * (rand_max - rand_min) + rand_min;
    let floorRandomResult = Math.floor(randomResult);
    console.log(listOfComputerChoices[floorRandomResult]);
}

function PlayerSelection(){
    let playerInput = prompt("Print your move: [Rock | Paper | Scissors]");
    return playerInput.toLowerCase();
}

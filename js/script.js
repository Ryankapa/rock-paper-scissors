function ComputerPlay(){
    let listOfComputerChoices = ["Rock", "Paper", "Scissors"];
    const rand_min = 0, rand_max = 3;
    let randomResult = Math.random() * (rand_max - rand_min) + rand_min;
    let floorRandomResult = Math.floor(randomResult);
    console.log(listOfComputerChoices[floorRandomResult]);
}


function playRound(){ //Define the function
    
    let player = playerSelection();
    let computer = computerSelection();

    if (player === "Rock" && computer === "Scissors" || player === "Scissors" && computer === "Paper" || player === "Paper" && computer === "Rock" ){ //check all the winning possibilities.
        return `You win!!! ${playerSelection} beats ${computerSelection}`; // return a positive message of you win. 
    } else if (player === computer){ //check to see if there options are the same 
        return `You Tied, Great minds often both choose ${player}`; // announce a draw
    } else { //every other combo is a loss
        return `you loose, ${computer} beats ${player} 9 times out of 10` //announce a loss. 
    }
}

// Computer's choice function
function computerSelection(){

// randomly generate a number and find its remainder when divided by 3
var choiceCPU = Math.floor((Math.random()*100) % 3);

switch (choiceCPU){ // check this choice
 
    case 0: // if it is 0 return Rock
        return "Rock";
        break;
    
    case 1: // if it is 1 return Paper
        return "Paper";
        break;

    case 2:// if it is 2 or anything else return scissors
        return "Scissors";
        break;    
}
}

//define the function that asks for players selection
function playerSelection() {

//takes in he players input prompting them to make a choice
//put all the players choices to lowercase
let playerChoice = prompt("So Rock Paper or Scissors");
let playerChoiceLC = playerChoice.toLowerCase();

//check if the selection is a rock paper or scissors selection. 
if (playerChoiceLC === "rock"){
    return "Rock"
} else if (playerChoiceLC === "paper" ) {
    return "Paper"
} else if (playerChoiceLC === "scissors") {
    return "Scissors"
} else { // if not return a error message. 
    return "this is not an option!!!"
}
}


// Computer's choice function
function getComputerChoice(){

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
} else {
    return "this is not an option!!!"
}

// if not return a error message. 


}//close the function
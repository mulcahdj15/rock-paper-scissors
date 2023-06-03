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

//Define the function

//if PS = "Rock" and CS = "Scissors" you win! 

//if PS = "Scissors" and CS = "Paper" you win!

//if PS = "Paper" and CS = "Rock" you win!

//if PS = "Scissors" and CS = "Rock" you lose! 

//if PS = "Paper" and CS = "Scissors" you lose!

//if PS = "Rock" and CS = "Paper" you lose!

//else you Tie!


}//close the function
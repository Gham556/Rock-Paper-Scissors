const playerSelection = prompt("Enter rock, paper, or scissors");


function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return(computerSelection);
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors")
            return("You win!")
        else if (playerSelection === "rock" && computerSelection === "rock")
        return("It's a tie!")
        else 
        return("You lose!");
           

            
    }

  
   
  
  console.log(playRound(playerSelection, computerSelection));
  console.log(getComputerChoice());
  console.log(playerSelection);
  console.log(computerSelection);
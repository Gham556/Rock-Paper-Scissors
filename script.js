const playerSelection = prompt("Enter rock, paper, or scissors");
playerSelection.toLowerCase

function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    const result = choices[Math.floor(Math.random()*choices.length)];
    return(result);
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors")
            return("You win!")
        else if (playerSelection === "rock" && computerSelection === "rock")
            return("It's a tie!")
        else if(playerSelection == "paper" && computerSelection == "rock")
            return("You win!")
        else if (playerSelection == "paper" && computerSelection == "paper")
            return("It's a tie!")
        else if (playerSelection == "scissors" && computerSelection == "paper")
            return("You Win!")
        else if (playerSelection == "scissors" && computerSelection == "scissors")
            return("It's a tie!")
        else    
        return("You lose!");
            
    }

  
   
  
  console.log(playRound(playerSelection, computerSelection));
  console.log("You chose " + playerSelection);
  console.log("Opponent chose " + computerSelection);
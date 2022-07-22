

let playerselection = "";
let playerScore = 0
let computerScore = 0


function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    const result = choices[Math.floor(Math.random()*choices.length)];
    return(result);
}        

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
            
        playerSelection = prompt("Enter rock, paper, or scissors")
        playerSelection.toLowerCase   
  
      if (playerSelection === "rock" && computerSelection === "scissors")    
      playerScore++
      else if (playerSelection === "rock" && computerSelection === "rock")
          ;
      else if(playerSelection === "paper" && computerSelection === "rock")
          playerScore++
          
      else if (playerSelection === "paper" && computerSelection === "paper")
          ;
          
      else if (playerSelection === "scissors" && computerSelection === "paper")
          playerScore++
          
      else if (playerSelection === "scissors" && computerSelection === "scissors")
          ;
      else if (playerSelection !== "rock", "paper", "scissors")  
      ;  
      else    
      return(computerScore++);

    return(playerScore, computerScore)
  }

        
function game() {
    for(i = 0; i < 5; i++)
    playRound()

}
    
game()
   
console.log("Your score is " + playerScore + " and the computer score is " + computerScore)
console.log(playRound(playerScore, computerScore))
console.log(computerSelection)

  
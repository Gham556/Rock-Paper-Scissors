let playerScore = 0
let computerScore = 0


function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)];
    return(result);
}        

let computerSelection = getComputerChoice();



function playRound() {
            
        playerSelection = prompt("Enter rock, paper, or scissors")
        playerSelection.toLowerCase 
        
        

  
      if (playerSelection === "rock" && computerSelection === "scissors") {   
      return(playerScore++) }
      else if (playerSelection === "rock" && computerSelection === "rock") {
          ; }
      else if(playerSelection === "paper" && computerSelection === "rock") {
           return(playerScore++) }
          
      else if (playerSelection === "paper" && computerSelection === "paper") {
          ; }
          
      else if (playerSelection === "scissors" && computerSelection === "paper") {
          return(playerScore++) }
          
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
           ; }
      
      else    {
      return(computerScore++) }

    return{playerScore, computerScore}
  }

        
function game() {
    for(i = 0; i < 5; i++) {
        getComputerChoice()
        computerSelection = getComputerChoice()
        playRound()
    ;}
}
    
game()
   
console.log("Your score is " + playerScore + " and the computer score is " + computerScore)


  
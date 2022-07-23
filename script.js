


let playerScore = 0
let computerScore = 0


function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)];
    return(result);
}        

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
            
        playerSelection = prompt("Enter rock, paper, or scissors")
        playerSelection.toLowerCase 
        let test = playerSelection 
         
  
      if (test === "rock" && computerSelection === "scissors") {   
      return(playerScore++) }
      else if (test === "rock" && computerSelection === "rock") {
          ; }
      else if(test === "paper" && computerSelection === "rock") {
           return(playerScore++) }
          
      else if (test === "paper" && computerSelection === "paper") {
          ; }
          
      else if (test === "scissors" && computerSelection === "paper") {
          return(playerScore++) }
          
      else if (test === "scissors" && computerSelection === "scissors") {
           ; }
      
      else    {
      return(computerScore++) }

    return{playerScore, computerScore}
  }

        
function game() {
    for(i = 0; i < 5; i++)
    playRound()
    getComputerChoice()
}
    
game()
   
console.log("Your score is " + playerScore + " and the computer score is " + computerScore)
console.log(playRound())
console.log(computerSelection)

  
let playerSelection = "";


let playerScore = 0
let computerScore = 0

    function game() {
        const computerSelection = getComputerChoice();
        function getComputerChoice(){
            var choices = ["rock", "paper", "scissors"];
            const result = choices[Math.floor(Math.random()*choices.length)];
            return(result);
        }        
        function playRound(playerSelection, computerSelection) {
            playerSelection += window.prompt("Enter rock, paper, or scissors")  
            playerSelection.toLowerCase 
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
                return("You lose!");}
        function scoreTracker() {
                    if (playerScore = 5)
                    console.log("That's the game! You win 5 " + computerScore)
                else if (computerScore = 5)
                    console.log("That's the game! You lose 5 " + playerScore)
                 
                }
        
        for (let i = 0; i < 5; i++)
            getComputerChoice();
            playRound(playerSelection, computerSelection);
            scoreTracker();
        if (playRound = "You win!")
        
            playerScore++
        else if (playRound() = "You lose!")
        
            computerScore++
        else;
       
    }

   
  
    game();


    
   
  
  console.log(game());
  console.log("Opponent chose " + computerSelection);
  console.log(scoreTracker())
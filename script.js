
//UI//

const buttons = Array.from(document.getElementsByTagName('button'));
const playerScore = document.getElementById('score')
const compScore = document.getElementById('compScore')

buttons.forEach(button => button.addEventListener('click', playRound));



// runs games //
function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    let result = choices[Math.floor(Math.random()*choices.length)];
    return(result);
}        



function playRound(button) {
          

      if (button.target.className === 'rock' && getComputerChoice() === "scissors") {   
      console.log("You Win!") 
      playerScore.textContent++;}
      else if (button.target.className === 'rock' && getComputerChoice() === "rock") {
          console.log("It's A Tie!"); }
      else if(button.target.className === "paper" && getComputerChoice() === "rock") {
           console.log("You Win!") 
           playerScore.textContent++;}
      else if (button.target.className === "paper" && getComputerChoice() === "paper") {
          console.log("It's A Tie"); }
          
      else if (button.target.className === "scissors" && getComputerChoice() === "paper") {
          console.log("You Win!") 
          playerScore.textContent++;
      }
      else if (button.target.className === "scissors" && getComputerChoice() === "scissors") {
           console.log("It's A Tie!"); }
      else    {
      console.log("You Lose!") 
        compScore.textContent++;}

  }

        

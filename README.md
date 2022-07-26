# Rock-Paper-Scissors
The goal of this project was to create a program that plays rock, paper, scissors. The code prompts for user input and generates a random computer result. 
The results are then compared with if, else statements to determine who wins a point. Then, the game() function loops both of the previous function so that five games are played. Finally, playRound() returns the score and it is logged in the console.

There were several problems that I encountered with this code. The majority of which centered around the use of variables as playRound arguments, preventing me from redefining them. I also was stuck for a while figuring out if it was computerSelection or playerSelection that was returning undefined. Later, I discovered that I could track the variables line by line in the console and found the errors source. 
My original code had also run the prompt outside of a function, so it took a few tries to create a loop that would ask for a new prompt each iteration. I wasted a lot of time trying to nest my functions because of the error playRound() is not a function. I never did find what caused the error as I did not call play round until after it was defined. The nesting did nothing to help and I ended up reverting to a previous commit. At one point I also tried creating a ScoreTracker function that ended up being pointless as playRound() could track the score after I changed it's return values. 

All in all, this project took longer than I planned but was a great debugging excercise. I have a much better understanding of functions and variables, and improved my syntax. The most important lesson I learned was how to use the Chrome Debugger which I have only briefly explored and yet it solved an issue that I had spent a couple hours tracking down. 

//UI//

As a follow up to this project I was tasked with created an on page UI that completed the above functions. I did this by creating three buttons that triggered the playRound function on click. Then, adding a score tracker and an alert that signals who the first to reach 5 is. 

The biggest problem I had was getting the buttons to work, and then after that finding a way to call the button class, so that it could be used as a variabel in the play round function. 


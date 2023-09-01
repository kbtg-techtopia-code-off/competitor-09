// require promt from npm
const prompt = require('prompt-sync')();


 // write a function that randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’

    function computerPlay() {
        let choices = ["rock", "paper", "scissors"];
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

// write a function that plays a single round of Rock Paper Scissors



function playRound(playerSelection, computerSelection) {
    
        let player = playerSelection.toLowerCase();
        let computer = computerSelection.toLowerCase();
        if (player === computer) {
            return "It's a tie!";
        } else if (player === "rock" && computer === "scissors") {
            return "You win! Rock beats Scissors";
        } else if (player === "paper" && computer === "rock") {
            return "You win! Paper beats Rock";
        } else if (player === "scissors" && computer === "paper") {
            return "You win! Scissors beats Paper";
        } else if (player === "rock" && computer === "paper") {
            return "You lose! Paper beats Rock";
        } else if (player === "paper" && computer === "scissors") {
            return "You lose! Scissors beats Paper";
        } else if (player === "scissors" && computer === "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "Invalid input!";
        }
    }


    // write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Validate user input and do not play until te users input the correct input.

    //create afunction thaat gets the users input, but doesnt return until user inputs correct input
    function getPlayerInput() {
        let playerInput = prompt("Please input your choice >>> ");
        let player = playerInput.toLowerCase();
        while (player !== "rock" && player !== "paper" && player !== "scissors") {
            console.log("Invalid input!");
            playerInput = prompt("Please input your choice >>> ");
            player = playerInput.toLowerCase();
        }
        return player;
    }

    function game() {

        let playerScore = 0;
        let computerScore = 0;
        let round = 0;

        while (round < 5) {
            let computerSelection = computerPlay();
            let playerSelection = getPlayerInput();

            // log computer and player inputs
            console.log(`The computer chose: ${computerSelection}`);
            console.log(`The player chose: ${playerSelection}`);
            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            if (result.includes("win")) {
                console.log('The winner is: player')
                playerScore++;
            } else if (result.includes("lose")) {
                console.log('The winner is: computer')
                computerScore++;
            }
            round++;
            console.log('Wins: ' + playerScore )
            console.log( 'Losses: ' + computerScore);
            console.log("Games played: " + round);
        }

       
    }

    game();

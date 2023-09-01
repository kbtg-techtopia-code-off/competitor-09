// require promt from npm
const prompt = require('prompt-sync')();
const inquirer = require('inquirer');


 // write a function that randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’

function computerPlay() {
        let choices = ["rock", "paper", "scissors", "spock", "lizard"];
        let randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    
        let player = playerSelection.toLowerCase();
        let computer = computerSelection.toLowerCase();

        // recreate the game logic with normal rules for rocks paper and scissor but with additional rules for spock and lizard

        if (player === computer) {
            return 3;
        } else if (player === "rock" && computer === "scissors") {
            return 1
        } else if (player === "paper" && computer === "rock") {
            return 1
        } else if (player === "scissors" && computer === "paper") {
            return 1
        } else if (player === "rock" && computer === "paper") {
            return 0
        } else if (player === "paper" && computer === "scissors") {
            return 0
        } else if (player === "scissors" && computer === "rock") {
            return 0
        } 
        // spock beats rock
        else if (player === "spock" && computer === "rock") {
            return 1
        }
        else if (player === "rock" && computer === "spock") {
            return 0
        }
         // spock beats scissors
        else if (player === "spock" && computer === "scissors") {
            return 1
        }
        else if (player === "scissors" && computer === "spock") {
            return 0
        }
    // lizard beats spock
        else if (player === "lizard" && computer === "spock") {
            return 1
        }
        else if (player === "spock" && computer === "lizard") {
            return 0
        }
        // paper beats spock

        else if (player === "paper" && computer === "spock") {
            return 1
        }
        else if (player === "spock" && computer === "paper") {
            return 0
        }
        // lizard beats paper
        else if (player === "lizard" && computer === "paper") {
            return 1
        }
        else if (player === "paper" && computer === "lizard") {
            return 0
        }
        // lizard beats spock
        else if (player === "lizard" && computer === "spock") {
            return 1
        }
        else if (player === "spock" && computer === "lizard") {
            return 0
        }
        // rock beats lizard
        else if (player === "rock" && computer === "lizard") {
            return 1
        }
        else if (player === "lizard" && computer === "rock") {
            return 0
        }
        // scissors beats lizard
        else if (player === "scissors" && computer === "lizard") {
            return 1
        }
        else if (player === "lizard" && computer === "scissors") {
            return 0
        }
    }


  

    // rewite getPlayerInput() to use inquirer, that allows user to select a choice from multiple options.
    
    function getPlayerInputFromOptions() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'player',
                message: 'Please select your choice',
                choices: ['rock', 'paper', 'scissors', 'lizard', 'spock']
            }
        ]).then(answers => {
            return answers.player;
        })
    }

    async function game() {

        let playerScore = 0;
        let computerScore = 0;
        let round = 0;

        while (round < 5) {
            let computerSelection = computerPlay();
            let playerSelection = await getPlayerInputFromOptions();

            // log computer and player inputs
            console.log(`The computer chose: ${computerSelection}`);
            console.log(`The player chose: ${playerSelection}`);
            let result = playRound(playerSelection, computerSelection);
            if (result === 1) {
                console.log('The winner is: player')
                playerScore++;
            } else if (result ===0) {
                console.log('The winner is: computer')
                computerScore++;
            } else {
                console.log('It is a tie')
            }
            round++;
            console.log('Wins: ' + playerScore )
            console.log( 'Losses: ' + computerScore);
            console.log("Games played: " + round);
        }

       
    }

    game();


const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const mockRequest = {
    playerChoice: "rock",
}

const mockResponse = {
    computerChoice: "rock",
    playerChoice: "rock",
    wins: 1,
    losses: 0,
    gamesPlayed: 1,
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


app.use(bodyParser.json());


app.post('/', (req, res) => {
    let choices = ["rock", "paper", "scissors", "spock", "lizard"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let playerChoice = req.body.playerChoice;
    console.log(playerChoice)
    // validate the request body, if the input is invalid or is not part of choices , return 400
    if (!req.body.playerChoice || !choices.includes(req.body.playerChoice)) {
        res.status(400).send(JSON.stringify({ message: "Invalid input!" }));
    }
    const roundResult = playRound(playerChoice, computerChoice);
    if (roundResult == 1){
        // return a json rsponse in the format of mockResponse
        return res.json({
            computerChoice: computerChoice,
            playerChoice: playerChoice,
            wins: 1,
            losses: 0,
            gamesPlayed: 1,
        })
    
    }
    if (roundResult == 0){
        // return a json rsponse in the format of mockResponse
        return res.json({
            computerChoice: computerChoice,
            playerChoice: playerChoice,
            wins: 0,
            losses: 1,
            gamesPlayed: 1,
        })
    
    }
    if (roundResult ==3){
        // return a json rsponse in the format of mockResponse
        return res.json({
            computerChoice: computerChoice,
            playerChoice: playerChoice,
            wins: 0,
            losses: 0,
            gamesPlayed: 1,
        })
    
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

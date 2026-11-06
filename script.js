//Rock paper and scissors

//computer will pick one randomly

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3));

    if (choice === 0) {
        return "rock"
    }

    else if (choice === 1) {
        return "scissors"
    }

    else if (choice === 2) {
        return "paper"
    }
}



// user will pick one radnomly

function getHumanChoice() {
    let pick = prompt("rock, paper, or scissors?");
    return pick.toLowerCase()
}


//set score variables
let humanScore = 0
let computerScore = 0

//game

  function playRound(getComputerChoice, getHumanChoice) {
    if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
       ++humanScore
        return "You Win! Rock beats Scissors."
    }
    else if (getHumanChoice === "rock" && getComputerChoice === "rock") {
        return "Tie! Play again."

    }
    else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        ++computerScore
        return "You lose. Paper beats Rock"
    }

    else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
         ++computerScore
        return "You lose. Rock beats Scissors"
    }
    else if (getHumanChoice === "scissors" && getComputerChoice === "scissors") {
        
        return "Tie! Play again."
    }
    else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        ++humanScore
        return "You win! Scissors bears Paper."
    }
    else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        ++computerScore
        return "You lose. Scissors beats paper."
    }
    else if (getHumanChoice === "paper" && getComputerChoice === "paper") {
        return "Tie! Play again."

    }
    else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        ++humanScore
        return "You Win! Paper beats rock."
    }
  }


function playGame() {
    

}

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

console.log(playRound(computerSelection, humanSelection))
console.log(computerSelection)
console.log(humanSelection)
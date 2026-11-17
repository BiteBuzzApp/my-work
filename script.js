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





//set score variables
let humanScore = 0
let computerScore = 0

//game

  function playRound(getComputerChoice, getHumanChoice) {
    if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
       ++humanScore
        roundResult.textContent = "You Win! Rock beats Scissors."
    }
    else if (getHumanChoice === "rock" && getComputerChoice === "rock") {
        roundResult.textContent = "Tie! Play again."

    }
    else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        ++computerScore
        roundResult.textContent = "You lose. Paper beats Rock"
    }

    else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
         ++computerScore
        roundResult.textContent = "You lose. Rock beats Scissors"
    }
    else if (getHumanChoice === "scissors" && getComputerChoice === "scissors") {
        
        roundResult.textContent = "Tie! Play again."
    }
    else if (getHumanChoice === "scissors" && getComputerChoice === "paper") {
        ++humanScore
        roundResult.textContent = "You win! Scissors bears Paper."
    }
    else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        ++computerScore
        roundResult.textContent = "You lose. Scissors beats paper."
    }
    else if (getHumanChoice === "paper" && getComputerChoice === "paper") {
        roundResult.textContent = "Tie! Play again."

    }
    else if (getHumanChoice === "paper" && getComputerChoice === "rock") {
        ++humanScore
        roundResult.textContent = "You Win! Paper beats rock."
    }

  }


//button selction
  const playerPick = document.querySelector(".container")

  playerPick.addEventListener("click", (event) => {

    gameResult.textContent = ""

    if(event.target.className === "rock"){
        playRound(getComputerChoice(),"rock");
    }

    else if (event.target.className === "paper"){
        playRound(getComputerChoice(),"paper");
    }

    else if (event.target.className === "scissors"){
        playRound(getComputerChoice(),"scissors");
    }

    theScore.textContent = "HumanScore: " + humanScore + " Computer Score:" + computerScore;
    
    if (humanScore === 5){
        gameResult.textContent = "You win"
        humanScore = 0
         computerScore = 0
    }

    else if (computerScore === 5) {
        gameResult.textContent = "you lose"
        computerScore = 0
        computerScore = 0
        
    }
  })

  const theScore = document.createElement("p")
  document.body.appendChild(theScore)

  const roundResult = document.createElement("p")
  document.body.appendChild(roundResult)

  const gameResult = document.createElement("p")
  document.body.appendChild(gameResult)


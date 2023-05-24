const prompt = require("prompt-sync")();

function getComputerChoice(){
  let choices = ["Rock", "Paper", "Scissors"] 
  const randomIndex = Math.floor(Math.random() * choices.length);
   return choices[randomIndex]
}



let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    
    console.log("PlayerSection: ", playerSelection)
    console.log("ComputerSelection: ", computerSelection)
    if (playerSelection == computerSelection){
        return `Tie, You Both Selected ${playerSelection}`
    }    
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return `You Lose! ${computerSelection} beats ${playerSelection }`
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return `You Lose! ${computerSelection} beats ${playerSelection }`
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return `You Lose! ${computerSelection} beats ${playerSelection }`
    }
    

}

let game = () => {
    let myScore = 0;
    let computerScore = 0;
    let x= 0
    while(x < 5){
        //let decision = prompt("Whats you Decision");
        let round = playRound(prompt("Decision: "), getComputerChoice())
        if (round.includes("You Win!")){
            myScore++

        } else if(round.includes("You Lose!")){
            computerScore++
        }
    x+=1
    }

    console.log("My Score: ", myScore);
    console.log("Computer Score", computerScore);
}

console.log(game())
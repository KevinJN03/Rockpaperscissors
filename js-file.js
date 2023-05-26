const btn = document.querySelectorAll(".btn");
const playerImg = document.getElementById("player-img");
const computerImg = document.getElementById("computer-img");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal")
const Score = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const resultTitle = document.querySelector("#result-title");
const resultSubtitle = document.querySelector("#result-subtitle");
let playerScoreCounter = 0; 
let computerScoreCounter = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let playRound = (playerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = getComputerChoice()
  computerImg.setAttribute("src", `./Images/${computerSelection}.png`)
  computerSelection = computerSelection.toUpperCase();
  if (playerSelection == computerSelection) {
    return `Tie, You Both Selected ${playerSelection}`;
  }

  if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK")
  ) {
    
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

function game() {
  btn[0].addEventListener("click", ()=> {
    let testRound = getScore("rock") 
    //playerImg.setAttribute("src", "./Images/paper.png")
    console.log("playerScoreCounter2", playerScoreCounter)
    console.log("computerScoreCounter2", computerScoreCounter)
    
    gameOver()
  });

  btn[1].addEventListener("click", ()=> {
    let testRound = getScore("paper") 
    //playerImg.setAttribute("src", "./Images/paper.png")
    console.log("playerScoreCounter2", playerScoreCounter)
    console.log("computerScoreCounter2", computerScoreCounter)
    
    gameOver()
  });

  btn[2].addEventListener("click", ()=> {
    let testRound = getScore("scissors") 
    //playerImg.setAttribute("src", "./Images/paper.png")
    console.log("playerScoreCounter2", playerScoreCounter)
    console.log("computerScoreCounter2", computerScoreCounter)
    
    gameOver()
  });


  }


function removeDecision(str) {
  finalStr = "";

  if (str.includes("You Lose!")) {
    finalStr = str.replace("You Lose!", "");
  } else if (str.includes("You Win!")) {
    finalStr = str.replace("You Win!", "");
  } else {
    finalStr = str.replace("Tie,", "");
  }

  return finalStr;
}





function getScore(str){
  round = playRound(str);
  playerImg.setAttribute("src", `./Images/${str}.png`)
  
    if (round.includes("You Win!")) {
      playerScoreCounter++;
      resultTitle.innerText = "You Win!";
    }
    if (round.includes("You Lose!")) {
      computerScoreCounter++;
      resultTitle.innerText = "You Lose!";
    }
    if (round.includes("Tie,")) {
      resultTitle.innerText = "Tie!";
    }
    resultSubtitle.innerText = removeDecision(round);
    computerScore.innerHTML = `Computer: ${computerScoreCounter}`; 
    Score.innerHTML = `Player: ${playerScoreCounter}`; 
  
}
 
const playButton = document.createElement("button");
  playButton.classList.add("play-button")
  playButton.textContent = "Play Again"
  modal.append(playButton)
  playButton.addEventListener("click", ()=> {
    resetGame()
  })
  
function gameOver(){

  
  const modalText = document.getElementById("modal-text");

  if(playerScoreCounter >= 5) {
    modalText.textContent= "You Won the Game"
    modalContainer.style.display =  "block"
 
  } else if(computerScoreCounter >= 5){
    modalText.textContent = "You Lost the Game"
    modalContainer.style.display = "block"
    
  }
  

 
  
}

function resetGame(){
  computerScoreCounter = 0;
  playerScoreCounter = 0;
  computerScore.innerHTML = "Computer:"
  Score.innerHTML = "Player:"
  modalContainer.style.display = "none"


}

game()
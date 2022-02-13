function computerPlay() 
{
  const rps_options = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return rps_options[choice];
}

function playRound(playerSelection, computerSelection) 
{
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")
  {
    playerScore ++;
    return "You win! Rock beats scissors";
  }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper")
  {
    computerScore++;
    return "You lose! Paper beats rock";
  }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock")
  {
    return "It's a draw! Rock ties rock";
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  {
    playerScore++;
    return "You win! Paper beats rock";
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")
  {
    computerScore++;
    return "You lose! Scissors beats paper";
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper")
  {
    return "It's a draw! Paper ties paper";
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
  {
    playerScore++;
    return "You win! Scissors beats paper";
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")
  {
    computerScore++;
    return "You lose! Rock beats scissors";
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors")
  {
    return "It's a draw! Scissors ties scissors";
  }
}

let playerScore = 0;
let computerScore = 0;
function game()
{
  while ((playerScore + computerScore) < 5)
  {
    let playerSelection = prompt("Please enter your selection");
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}

console.log(game());
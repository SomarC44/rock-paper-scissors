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
    console.log("You win! Rock beats scissors");
  }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper")
  {
    computerScore++;
    console.log("You lose! Paper beats rock");
  }
  else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock")
  {
    console.log("It's a draw! Rock ties rock");
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  {
    playerScore++;
    console.log("You win! Paper beats rock");
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")
  {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  }
  else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper")
  {
    console.log("It's a draw! Paper ties paper");
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")
  {
    playerScore++;
    console.log("You win! Scissors beats paper");
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")
  {
    computerScore++;
    console.log("You lose! Rock beats scissors");
  }
  else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors")
  {
    console.log("It's a draw! Scissors ties scissors");
  }
}

let playerScore = 0;
let computerScore = 0;
function game()
{
  while ((playerScore + computerScore) < 5)
  {
    let playerSelection = prompt("Please enter your selection");
    while(playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors")
    {
      console.log('Please choose a valid choice between "rock", "paper", or "scissors"' );
      playerSelection = prompt("Please enter your selection");
    }
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore)
  {
    console.log("You win!");
  }
  else
  {
    console.log("You lose :(");
  }
}

console.log(game());
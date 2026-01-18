/*
PSEUDOCODE: Rock Paper Scissors Game

START

DEFINE FUNCTION getComputerChoice
  - Generate a random number between 0 and 1
  - IF random number < 0.33
      RETURN "rock"
  - ELSE IF random number < 0.66
      RETURN "paper"
  - ELSE
      RETURN "scissors"

DEFINE FUNCTION getHumanChoice
  - Prompt the user to enter "rock", "paper", or "scissors"
  - Store the user input
  - RETURN the user input

DECLARE global variable humanScore and initialize it to 0
DECLARE global variable computerScore and initialize it to 0

DEFINE FUNCTION playRound(humanChoice, computerChoice)
  - Convert humanChoice to lowercase

  - IF humanChoice equals computerChoice
      Display "Tie! Both chose the same option"
      END FUNCTION

  - ELSE IF
      humanChoice is "rock" AND computerChoice is "scissors"
      OR humanChoice is "paper" AND computerChoice is "rock"
      OR humanChoice is "scissors" AND computerChoice is "paper"
        Increment humanScore by 1
        Display "You win! Human choice beats computer choice"

  - ELSE
      Increment computerScore by 1
      Display "You lose! Computer choice beats human choice"

DEFINE FUNCTION playGame
  - REPEAT 5 TIMES
      Get human choice using getHumanChoice
      Get computer choice using getComputerChoice
      Call playRound with human choice and computer choice

  - Display final humanScore
  - Display final computerScore

  - IF humanScore > computerScore
      Display "Human wins the game"
  - ELSE IF computerScore > humanScore
      Display "Computer wins the game"
  - ELSE
      Display "The game is a tie"

CALL FUNCTION playGame

END
*/

function getComputerChoice() {
    const randomNumber = Math.random();
    if(randomNumber < 0.33) {
        return "rock";
    }
    else if(randomNumber < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter rock or paper or scissors: ");
    return choice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice) {
        console.log("Tie! both chose the same option");
    }
    else if((humanChoice === "rock" && computerChoice === "scissors")
        ||(humanChoice === "paper" && computerChoice === "rock")
        ||(humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        console.log(`--- Round ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("=== Final Score ===");
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
    if(humanScore > computerScore) {
        console.log("🎉 You win the game!");
    }
    else if(humanScore < computerScore) {
        console.log("💀 Computer wins the game!");
    }
    else {
        console.log("🤝 It's a tie!");
    }
}

playGame();
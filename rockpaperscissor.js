console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" ||userInput === "scissor"||userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error!");
  }
};
//This part of the code defines what the user can input and if they input something else it will saw it is an error. 

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
};

//this creates a computer version of rock, paper, scissor using the random number generator. The random number is between 0 and 1 so by multiplying by 3 and assinging a value that is rounded down hence the math.floor function it allows us to make a computer which gives us different rock, paper, scissor etc 

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "You won!"
  }
};

// This creates a generic function of if you have a userchoice and a computer choice what the outcomes should be by difining previous functions to a variable

const playGame = () => {

const userChoice = getUserChoice('bomb');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice,computerChoice));
}

playGame()

//this function allows the previous functions to operate. The only thing that needs to be changed for the game to work is the getUserChoice field. 




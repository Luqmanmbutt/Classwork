const init = () => {

  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      return "Error!";
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "paper";
      case 1:
        return "rock";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "rock" && computerChoice === "paper")
    {
        return "Sorry, computer WON!!";
  
    } else {
        return "Congratulations, you WON!!";
      }
    
  // const determineWinner = (userChoice, computerChoice) => {
  //   if (userChoice === "paper" && computerChoice === "scissors")
  //   {
  //       return "Sorry, computer WON!!";
  
  //   } else {
  //       return "Congratulations, you WON!!";
  //     }
  
  // if (userChoice === "paper") {
  //   if (computerChoice === "scissors") {
  //     return "Sorry, computer WON!!";
  //   } else {
  //     return " congratulations, you WON!!";
  //   }
  // }
  
  // if (userChoice === "scissors") {
  //   if (computerChoice === "rock") {
  //     return "Sorry, computer WON!!";
  //   } else {
  //     return " congratulations, you WON!!";
  //   }
  };
  getUserChoice("rock")
  getComputerChoice()
  
  console.log(getUserChoice("rock"));
  
  console.log(determineWinner("paper", "scissors"));
  console.log(determineWinner("rock", "rock"));
  

}
window.addEventListener('DOMContentLoaded', init)
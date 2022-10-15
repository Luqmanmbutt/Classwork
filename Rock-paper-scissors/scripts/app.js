const init = () => {

    const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if(userInput === 'rock' || userInput === 'paper' || userInput === 
      'scissors'){
          return userInput;
      } else {
          return ('Error!');
        } 
      }
      
      console.log(getUserChoice('rock'));
      console.log(getUserChoice('kilo'));
      console.log(getUserChoice('paper'));
      
      


}
window.addEventListener('DOMContentLoaded', init)
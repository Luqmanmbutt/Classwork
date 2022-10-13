// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

// pseudocode 

// --  if plus is true add first number and second number for result
// -- if signs equls plus then add firstNumber and Second number for equation
// 3 types - 1. string ('firstNumber') 2. boolean ( true or false ) 3. number ( 3 )




function init() {

    let firstNumber = prompt("what is the first number?");
    console.log( firstNumber);
    let secondNumber = prompt("What is your second number?")
    console.log( secondNumber);
    let signs = prompt("Would you like to + , - , * or /")
    console.log (signs);
    let message = "YOUR RESULT  -  "


    
    if (signs === "+" ) {
      alert(message + (Number(firstNumber) + Number(secondNumber)))
       } else if (signs === "-") {
      alert(message + (Number(firstNumber) - Number(secondNumber)))
       } else if (signs === "*") {
        alert(message + (Number(firstNumber) * Number(secondNumber)))
       } else if (signs === "/") {
        alert(message + (Number(firstNumber) / Number(secondNumber)))
       } 
    
      
      
      
      
    
    
    
    // if (answer == 10) {
    //   alert("Wow! Correct!");
    // } else {
    //   alert("Wrong!")
    // }








}

window.addEventListener('DOMContentLoaded', init)

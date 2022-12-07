/* eslint-disable no-unused-vars */

// ? write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// ? eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(name){
  if (!name) { 
    return 'Hello World!' 
} else {
   return `Hello ${name}!`
}
}
// return function()
// ? write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  return (radius * radius * Math.PI)
}
// ? write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  return celcius * 9 / 5 + 32;
  
}
// ? write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  const numbers = parseFloat(number.toString().split('').reverse().join(''))
  return numbers
}
// ? write a function to check if a word or phrase is a palindrome returning a boolean
// ? eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  const reverseWord = string.split("").reverse().join("")
  const reversePhrase = string.split(" ").reverse().join(" ")
  
  if (reverseWord) return string == reverseWord
  else return string == reversePhrase

}


// ? write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// ? eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  var arr = string.split(''),
  alpha = arr.sort().join('').replace(/\s+/g, '');
  return alpha; 
  }
// ? write a function that capitalizes the first letter of each word
// ? eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  string = string.split(" ");

  for (let i = 0, x = string.length; i < x; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }

  return string.join(" ");
}


// ? write a function that frames a string in asterisks (*)
// ?                            ***************
// ? eg: frame('Hello Kitty') => * Hello Kitty *
//  ?                           ***************
function frame(string) {
  let border = '*'.repeat(string.length + 4)
  return `${border}\n* ${string} *\n${border}`
}

// ! Do not alter any of the code below

module.exports = {
  hello,
  areaOfCircle,
  celciusToFarenheit,
  numberReverse,
  palindromeCheck,
  orderStringAlphabetically,
  titleCase,
  frame
}

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
  const fahrenheit = celcius * 9 / 5 + 32;
    return fahrenheit;
}
// ? write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
  return (
    parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)
  )                 
}

// ? write a function to check if a word or phrase is a palindrome returning a boolean
// ? eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  return string == string.split('').reverse().join(''); 
}


// ? write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// ? eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {

}

// ? write a function that capitalizes the first letter of each word
// ? eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  const splitStr = string.toLowerCase().split(' ');
  for (const i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
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

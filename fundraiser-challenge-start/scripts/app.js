// Remember to console log and check if your JS is connected properly

function init() {
 
const onePoundButton = document.querySelector(".one-pound-button")
const fivePoundButton = document.querySelector(".five-pound-button")
const tenPoundButton = document.querySelector(".ten-pound-button")
const donationBar = document.querySelector(".donation-target")

donationBar.style.backgroundColor = "black" 

let targetBar = 0 



const onePoundBtn = () => {
  // console.log('donate button is working')
  targetBar ++ 
  console.log("target button", targetBar)
      
}

const fivePoundBtn = () => {
  targetBar += 5
  console.log("target button", targetBar)

}

const tenPoundBtn = () => {
  targetBar += 10
  console.log("target button", targetBar)

}














onePoundButton.addEventListener("click", onePoundBtn)
fivePoundButton.addEventListener("click", fivePoundBtn)
tenPoundButton.addEventListener("click", tenPoundBtn)

}



window.addEventListener('DOMContentLoaded', init)
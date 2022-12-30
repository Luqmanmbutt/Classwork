// Remember to console log and check if your JS is connected properly

function init() {
  
const onePoundButton = document.querySelector(".one-pound-button")
const fivePoundButton = document.querySelector(".five-pound-button")
const tenPoundButton = document.querySelector(".ten-pound-button")
const donationBar = document.querySelector(".donation-target")
const loadingBar = document.querySelector(".loading-bar")
const 

console.log("loadingBar", loadingBar)

donationBar.style.backgroundColor = "black"
loadingBar.style.width = "0%"

let targetBar = 0 


const onePoundBtn = () => {
  targetBar += 1
  loadingBar.style.width = targetBar + "%"
  targetReached()
  console.log("target button", targetBar)
      
}

const fivePoundBtn = () => {
  targetBar += 5
  loadingBar.style.width = targetBar + "%"
  targetReached()
  console.log("target button", targetBar)

}

const tenPoundBtn = () => {
  targetBar += 10
  loadingBar.style.width = targetBar + "%"
  targetReached()
  console.log("target button", targetBar)

}

const targetReached = () => {
  if (targetBar >= 100 ) {
    onePoundButton.disabled = true;
    fivePoundButton.disabled = true;
    tenPoundButton.disabled = true;
    onePoundButton.style.color = "grey"
  } 

  
}



// document.getElementById("myBtn").disabled = true;








onePoundButton.addEventListener("click", onePoundBtn)
fivePoundButton.addEventListener("click", fivePoundBtn)
tenPoundButton.addEventListener("click", tenPoundBtn)

}



window.addEventListener('DOMContentLoaded', init)
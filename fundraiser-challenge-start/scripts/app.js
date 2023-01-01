// Remember to console log and check if your JS is connected properly

function init() {
/* Queryselector */
  
const onePoundButton = document.querySelector(".one-pound-button")
const fivePoundButton = document.querySelector(".five-pound-button")
const tenPoundButton = document.querySelector(".ten-pound-button")
const donationBar = document.querySelector(".donation-target")
const loadingBar = document.querySelector(".loading-bar")
const targetRemainder = document.querySelector(".target-text")


donationBar.style.backgroundColor = ""
loadingBar.style.width = "0%"

/* Variables */

let targetLeft= 100
let targetBar = 0 

/* Functions  */

const onePoundBtn = () => {
  targetBar += 1
  targetLeft -= 1
  targetRemainder.textContent = "YOU NEED " + "£" + targetLeft + " TO REACH TARGET" 
  loadingBar.style.width = targetBar + "%"
  targetReached()
      
}

const fivePoundBtn = () => {
  targetBar += 5
  targetLeft -= 5
  targetRemainder.textContent = "YOU NEED " + "£" + targetLeft + " TO REACH TARGET"
  loadingBar.style.width = targetBar + "%"
  targetReached()
}

const tenPoundBtn = () => {
  targetBar += 10
  targetLeft -= 10
  targetRemainder.textContent = "YOU NEED " + "£" + targetLeft + " TO REACH TARGET"
  loadingBar.style.width = targetBar + "%"
  targetReached()
}

const targetReached = () => {
  if (targetBar >= 100 ) {
    onePoundButton.disabled = true;
    fivePoundButton.disabled = true;
    tenPoundButton.disabled = true;
    fivePoundButton.style.backgroundColor = "grey"
    tenPoundButton.style.backgroundColor = "grey"
    onePoundButton.style.backgroundColor = "grey"
    targetRemainder.textContent = "THANK YOU!"
  } 

  
}

/* Event listeners */
onePoundButton.addEventListener("click", onePoundBtn)
fivePoundButton.addEventListener("click", fivePoundBtn)
tenPoundButton.addEventListener("click", tenPoundBtn)

}



window.addEventListener('DOMContentLoaded', init)
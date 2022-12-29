// Remember to console log and check if your JS is connected properly

function init() {
 


let targetBar = 0 



  const btn = document.querySelector(".one-pound-button")
  console.log("btn is working", btn)
    
  const donateButton = () => {
    // console.log('donate button is working')
    targetBar++
    console.log("target button", targetBar)
        
}





btn.addEventListener("click", donateButton)

















}



window.addEventListener('DOMContentLoaded', init)
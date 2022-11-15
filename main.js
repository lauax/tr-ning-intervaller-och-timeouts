window.addEventListener("DOMContentLoaded", main);
let buttonToggle = document.getElementById("button-toggle") 
let timeoutRef;


function main(){
  timeoutRef = setTimeout(cancelBackgroundChange, 4000);
    setUpEventListners();
}

function changeBackgroundColor(){
    document.body.style.background = getRandomColor();
    
}

function clickButton(){
    buttonToggle.addEventListener("click", cancelBackgroundChange)
}

function cancelBackgroundChange(){
    clearTimeout(timeoutRef);
}
function setUpEventListners(){
   let buttonInterval = document.getElementById("button-interval")
   buttonInterval.addEventListener("click", startBackgroundInterval)
}
function startBackgroundInterval(){
    setInterval(changeBackgroundColor, 1000);

}
function getRandomColor(){
   const value = Math.random();
   if(value < 0.2){
    return "blue"
   }
   else if(value < 0.2){
    return "red"
   }
   else if(value < 0.4){
    return "grey"
   }
   else if(value < 0.6){
    return "purple"
   }
   else if(value < 0.8){
    return "pink"
   }
}


// These are the selector for the elements on hand from the HTML.
const durationInput = document.querySelector('#duration'); 
const startBtn = document.querySelector('#start'); 
const pauseBtn = document.querySelector('#pause'); 
const circle = document.querySelector('circle'); 

const perimeter = circle.getAttribute('r') * Math.PI * 2; 
circle.setAttribute('stroke-dasharray', perimeter); 

let duration; 

// To call on the class and do something, we will use this! 
const timer = new Timer(
    durationInput, 
    startBtn, 
    pauseBtn, 
    //we will be using these callback functions to signal to the users that the timer has started, is working, and complete. 
    {
        onStart(totalDuration){
            console.log('Timer Started!'); 
            duration = totalDuration; 
        }, 
        onTick(timeRemaning){
            console.log('Timer is ticking!'); 
            circle.setAttribute('stroke-dashoffset', 
                perimeter * timeRemaning/duration - perimeter
            );
        }, 
        onComplete(){
            console.log('Timer is complete!')
        }
    }    
); 


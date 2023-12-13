// First, we defined the class with constructor properties and methods. 
class Timer{
    constructor(durationInput, startBtn, pauseBtn, callbacks){
        // This makes sure that they are listed as properties on a global scale. 
        this.durationInput = durationInput; 
        this.startBtn = startBtn; 
        this.pauseBtn = pauseBtn;
        if(callbacks){
            this.onStart = callbacks.onStart; 
            this.onTick = callbacks.onTick; 
            this.onComplete = callbacks.onComplete;
        }
        
        // Immediately create! 
        this.startBtn.addEventListener('click', this.start); 
        this.pauseBtn.addEventListener('click', this.pause); 
    }
    // By using this, JS takes this out of the class and makes it the first valid line. 
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining); 
        }
        // ones clicked, this will call on tick every sec, first one is manually so that there are no delays. 
        this.tick(); 
        // we are assigning it to 'this' so that we can use it somewhere else! 
        this.interval =  setInterval(this.tick, 20); 
    }
    pause = () => {
        clearInterval(this.interval); 
    }
    tick = () => {
        //we are taking the value in from the inputas string and viewing it as a num
        // const timeLeft = this.timeRemaining; 
        // this.timeRemaining= timeLeft - 1; 
        if(this.timeRemaining <= 0) {
            this.pause();
            if(this.onComplete){
                this.onComplete(); 
            }
        }
        else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if(this.onTick){
                this.onTick(this.timeRemaining); 
            } 
        } 
    } 

    get timeRemaining(){
        return parseFloat(this.durationInput.value); 
    }

    set timeRemaining(time){
        return this.durationInput.value = time.toFixed(2); 
    }
    onDurationChange = () => {

    }
}

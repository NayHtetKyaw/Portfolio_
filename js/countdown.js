class countDown{
    constructor(expiredDate, onRenader, onComplete){
        this.setExpiredDate(expiredDate);

        this.onRenader = onRenader;
        this.onComplete = onComplete;

        //to handle the expire date
    }
    setExpiredDate(expiredDate) {
        // to get the current time
        const currentTime = new Date().getTime();
        // to get the remaining time
        this.remainingTime = expiredDate.getTime() - currentTime;
    
        //determine if the countdown is completed
        this.remainingTime > 0 ? this.start() : this.complete();
    }
    
    complete(){
        if (typeof this.onComplete == 'function'){
            onComplete();
        }
    }

    getTime() {
        return{
            days: Math.floor(this.remainingTime / 1000 / 60 / 60 / 24),
            hours: Math.floor(this.remainingTime / 1000 / 60 / 60) % 24,
            minutes: Math.floor(this.remainingTime / 1000/ 60) % 60,
            seconds: Math.floor(this.remainingTime / 1000) % 60
        };
    }
    
    update() {
        if(typeof this.onRenader == 'function'){
            this.onRenader(this.getTime());
        }
    }

        
    start() {
    
        this.update();
        //set a timer
        const intervalId = setInterval (() => {
            //update the timer
            this.remainingTime -= 1000;
    
            if (this.remainingTime < 0){
                complete();
                clearInterval(intervalId);
            }else{
                this.update();
            }
        }, 1000);
    }

}

//after

const getDeadline = () => {
    const currentDate = new Date().getDate();
    return new Date(`July ${currentDate+11}, 2022 00:00:00`);
};

// const date = document.querySelector('.date');
// date.innerHTML = getDeadline().getDate();
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');

const format = (t) => {
    return t < 10 ? '0' + t : t;
}

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Seconds</small>
            </div>
        </div>
        `;
};

const showMessage = () => {
    message.innerHTML = `New page will be deployed shortly Today!`;
    app.innerHTML  = '';
    heading.style.display = none;
}

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
}

const complete = () => {
    showMessage();
    // restart the countdown after showing the 
    // greeting message for a day ()
    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(getDeadline());
    }, 1000 * 60 * 24);
};

const countdownTimer = new countDown(
    getDeadline(),
    render,
    complete
);



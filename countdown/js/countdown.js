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




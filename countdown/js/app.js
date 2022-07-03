// const now = new Date();
// // const time = now.getTime();
// const day = new Date('July 03, 2022 10:00:00');
// const start = new Date('July 04, 2020, 00:00:00');
// const end = new Date('July 14, 2022 00:00:00');

// const time = end.getTime() - start.getTime();
// const time = 150000;
// const minutes = Math.floor(time / 1000/ 60);
// const seconds = Math.floor(time/ 1000) % 60;

// console.log(time / 1000/ 60);
// console.log(minutes, seconds);

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




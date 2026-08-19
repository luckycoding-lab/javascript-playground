const dt = document.getElementById("date");
const dy = document.getElementById("day");
const m = document.getElementById("month");
const y = document.getElementById("year");

const today = new Date();


dt.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
dy.innerHTML =  weekDays[today.getDay()];
m.innerHTML =   allMonths[today.getMonth()];
y.innerHTML =   today.getFullYear();



// function updateClock() {
//     const time = new Date();
//     const timer = document.getElementById("timer");
    
//     timer.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getMinutes() + " ";
// }

// updateClock();

// setInterval(updateClock, 1000);

function updateClock() {
    const time = new Date();
    const timer = document.getElementById("timer");
    
    const hours = time.getHours().toString();
    const minutes = time.getMinutes().toString();
    const seconds = time.getSeconds().toString();
    const milseconds = time.getMilliseconds().toString();

    timer.innerHTML = `${hours}:${minutes}:${seconds}:${milseconds}`;
}

updateClock();
setInterval(updateClock, 1000);
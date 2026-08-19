let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let minSec = document.getElementById('minsec');

setInterval(()=> {

    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
    minSec.innerHTML = currentTime.getMilliseconds();
},1000);

let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
minSec.innerHTML = currentTime.getMilliseconds();
let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let playpause = document.getElementById("playpause");
let time = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes == 0;
            hours++;
        }
    }    

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if(time!== null) {clearInterval(time);}
    time = setInterval(stopwatch, 1000);
    playpause.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
}

function watchStop() {
    clearInterval(time);
    playpause.src = "https://img.icons8.com/ios-glyphs/64/play--v1.png";
}
function watchReset() {
    clearInterval(time);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}
let sec = 0;
let min = 0;
let hrs = 0;
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopwatch() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
   if (min == 60) {
            min = 0;
            hrs++;
        }
    }
    displaytime.innerHTML = formatTime(hrs) + ":" + formatTime(min) + ":" + formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(stopwatch, 1000);
        document.getElementById("playButton").src = "https://cdn-icons-png.flaticon.com/128/709/709714.png";
    }
}

function toggleTimer() {
    if (timer === null) {
        timer = setInterval(stopwatch, 1000);
        document.getElementById("playButton").src="play.png"; 
    } else {
        clearInterval(timer);
        timer = null;
        document.getElementById("playButton").src="stop.png"; 
    }
}

function stop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        sec = 0;
        min = 0;
        hrs = 0;
        displaytime.innerHTML = "00:00:00";
        document.getElementById("playButton");
    }
}


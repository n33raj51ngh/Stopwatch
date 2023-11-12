let btn1 = document.getElementById("start_btn");
let btn2 = document.getElementById("stop_btn");
let btn3 = document.getElementById("reset_btn");
let timer_text = document.getElementById("timer_text");

//adding event listener to all buttons
btn1.addEventListener("click" , Start);
btn2.addEventListener("click" , Stop);
btn3.addEventListener("click" , Reset);

let check = false;
let check_for_start = false;
//Defining Start function
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let event_value;
let ms, s , m , h;

function Start() {
    if(check_for_start === true) return;

    check = true;
    check_for_start = true;
    event_value = setInterval(function(){
        milliSeconds += 5;
        if(milliSeconds === 1000) {
            milliSeconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            Reset();
        }

        //-> change to string <-

        //for milliseconds section
        if(milliSeconds < 10) {
            ms = "00" + milliSeconds;
        }
        else if(milliSeconds < 100) {
            ms = "0" + milliSeconds;
        }
        else {
            ms = milliSeconds;
        }

        // for seconds section
        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        // for minutes section
        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        // for hours section
        if(hours < 10 ) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }
        timer_text.innerHTML = h + " : " + m + " : " + s + " : " + ms;
    },5)
}
//Defining Stop function
function Stop() {
    if(check === false) return;
    clearInterval(event_value);
    start_btn.innerText = "RESUME";
    check_for_start = false;
}
//Defining Reset function
function Reset() {
    check = false;
    check_for_start = false;
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer_text.innerHTML = "00 : 00 : 00 : 000";
    clearInterval(event_value);
    start_btn.innerText = "START";   
}

let timerId = null;
let timerDisplay=document.querySelector('.timerDisplay');
let stopBtn=document.querySelector('#stopBtn');
let startBtn=document.querySelector('#startBtn');
let resetBtn=document.querySelector('#resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

startBtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId =setInterval(startTimer,10)
});

stopBtn.addEventListener('click',function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function startTimer(){
    msec++;
    if(msec === 100){
        msec = 0;
        secs++;
        if(secs === 60){
            secs = 0;
            mins++;
        }
    }
    //let msecString = msec<10? `0${msec}`:msec;
    let msecString;
    if(msec<10){
        msecString = `0${msec}`;
    }
    else{
        msecString = msec;
    }

    let secString;
    if(secs<10){
        secString = `0${secs}`;
    }
    else{
        secString = secs;
    }

    let minString;
    if(mins<10){
        minString = `0${mins}`;
    }
    else{
        minString = mins;
    }
    timerDisplay.innerHTML = `${minString}:${secString}:${msecString} `;
}

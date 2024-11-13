const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(setTime,1000)
})

const setTime=function(){
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr<10 ? `0${hr}`: hr;
    mn = mn<10? `0${mn}`:mn;
    sec = sec<10? `0${sec}`:sec;

    time.innerHTML=`${hr} : ${mn} : ${sec}`;
}
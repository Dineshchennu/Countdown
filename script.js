const day = document.getElementById('days');
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const secs = document.getElementById('seconds');
const matchYear='5 Oct 2023';
function countdown(){
    const newYearDate = new Date(matchYear);
    const currentDate= new Date();
    // matchDate= newyeardate-current;
    const second=(newYearDate-currentDate)/1000;
    //days= math.floor(matchDate/(1000*60*60*24))
    const days=Math.floor(second/3600/24);
    const hours = Math.floor(second/3600) % 24;
    const mins= Math.floor(second/60) % 60;
    const sec = Math.floor(second) % 60;

    day.innerHTML= days;
    hour.innerHTML= hours;
    min.innerHTML= mins;
    secs.innerHTML= sec;

}
countdown();
setInterval(countdown,1000);
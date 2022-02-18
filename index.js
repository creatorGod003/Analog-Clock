let hourDeg = 90,minuteDeg=90,secondDeg = 90;

function changeHourDeg(){
    const d = new Date();
    var hour = d.getHours();
    // console.log(hour);
    var minute = d.getMinutes();
    // console.log(minute);
    hourDeg= 90+30*hour+0.5*minute;
    document.getElementById("hour-hand").style.transform ="rotateZ("+hourDeg+"deg)";
}

function changeMinuteDeg(){

    const d = new Date();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    minuteDeg = 90 + 6*minute+(second/10);
    document.getElementById("minute-hand").style.transform ="rotateZ("+minuteDeg+"deg)";
}

function changeSecondDeg(){
    const d = new Date();
    var second = d.getSeconds();
    // console.log(second);
    secondDeg =90+second*6;
    document.getElementById("second-hand").style.transform ="rotateZ("+secondDeg+"deg)";
}


setInterval(changeSecondDeg,1);
setInterval(changeHourDeg,1);
setInterval(changeMinuteDeg,1);



function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let midday = "AM";
    //hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    if (hour > 12) {
        hour -= 12;
        midday = "PM";
    }
    if (hour == 0) {
        hour = 12;
        midday = "AM";
    }

    //to append zero if less than 10;
    hour = attachZero(hour);
    minute = attachZero(minute);
    second = attachZero(second);

    console.log(`${hour} : ${minute} : ${second} ${midday}`);

    setTimeout(function(){ currentTime() }, 1000);
    setTimeout(function (){ console.clear() },2000);
}

function attachZero(time) {
    if (time < 10)
        return '0'+time;
    else
        return time;
}

console.log(currentTime());
setInterval(() => {
    const time = document.getElementById("time");
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day_night = "AM"

    if (hour > 12){
        day_night = "PM";
        hour  = hour - 12;
    }if (hour < 10){
        hour  = "0" + hour;
    }if (min < 10){
        hour  = "0" + min;
    }if (sec < 10){
        hour  = "0" + sec;
    }
    time.textContent = hour + ":" + min + ":" + sec + " "+ day_night;
})
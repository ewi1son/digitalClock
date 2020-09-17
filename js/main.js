// Digital Clock

function digitalClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // Determines AM or PM before conversion
    var dayOrNight = "AM";
        dayOrNight = (hour >= 12) ? "PM" : "AM";
        hour = twelveTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);
    document.getElementById("clock").innerText = hour + ":" + minute + ":" + second + " " + dayOrNight;
    var t = setTimeout(function(){ digitalClock() }, 1000);
    
}
// Displays neccesary 0 with minute and second
function checkTime(i) {
    if (i < 10) {
        return "0" + i;
    }
    else {
        return i;
    }
}

// Converts 24hr time to 12hr
function twelveTime(h) {
    if (h == 0) {
        return "12";
    }
    else if (h > 12) {
        return (h-12); 
    }
    else {
        return h;
    }
}


digitalClock();
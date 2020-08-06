function getTime() {
        var now     = new Date(); 
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        // var second  = now.getSeconds();  
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        // if(second.toString().length == 1) {
        //      second = '0'+second;
        // }   
        var dateTime = hour+':'+minute;  
         return dateTime;
    }

// real time 
var currentTime = getTime()
setInterval(function(){
currentTime = getTime();
document.getElementById("digital-clock").innerHTML = currentTime;
}, 100);


var timesList = ['00:00', '01:01', '01:10', '01:11', '01:23', '02:02', '02:20', '02:22', '03:00', '03:03', '03:33', '04:04', '04:20', '05:05', '05:55', '06:00', '06:06', '07:07', '08:08', '08:50', '09:00', '09:09', '10:10', '11:11', '12:00', '12:12', '12:21', '12:34', '13:13', '13:57', '14:14', '15:00', '15:15', '16:16', '16:20', '17:17', '18:00', '18:18', '19:19', '20:20', '21:00', '21:21', '22:22', '23:23', '23:45'];


setInterval(function(){
    if (timesList.includes(currentTime)) {
        document.getElementById("background").className = "wowTime";
        document.getElementById("audio1").play();
        }
    else {
        document.getElementById("background").className = "regularTime";
    }
}, 100);



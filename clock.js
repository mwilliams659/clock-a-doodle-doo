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
    setInterval(function(){
        currentTime = getTime();
        document.getElementById("digital-clock").innerHTML = currentTime;
    }, 0);


var timesList = ['01:23', '08:50', '11:11', '12:34', '13:57', '16:20', '20:20', '21:21', '22:22', '23:23', '23:45'];
console.log(timesList[1]);
// var today = new Date();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


//   new Date().toLocaleTimeString();



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
    }, 1000);

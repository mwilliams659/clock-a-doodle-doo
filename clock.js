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


var timesList = ['14:53', '00:00', '01:01', '01:10', '01:"11"', '01:23', '02:02', '02:20', '02:22', '03:00', '03:03', '03:33', '04:04', '04:20', '05:05', '05:55', '06:00', '06:06', '07:07', '08:08', '08:50', '09:00', '09:09', '10:10', '11:11', '12:00', '12:12', '12:21', '12:34', '13:13', '13:57', '14:14', '15:00', '15:15', '16:16', '16:20', '17:17', '18:00', '18:18', '19:19', '20:20', '21:00', '21:21', '22:22', '23:23', '23:45'];

// Checks time to change elements
setInterval(function(){
    if (timesList.includes(currentTime)) {
        document.getElementById("inTheBack").className = "wowTime";
        document.getElementById("animate-this").className = "container funAnime animated";
        document.getElementById("snoopDogg").style.display = "block";
        document.getElementById("smokeDogg").style.display = "block";
        var now     = new Date(); 
        var second  = now.getSeconds();
        if (second === 0) {
            // this is when the audio gets played
            if (timesList.includes('04:20', '16:20', '14:53')) {
                document.getElementById("audio2").play();
            } else {
            document.getElementById("audio1").play();
            }
        }
    }
    else {
        document.getElementById("inTheBack").className = "regularTime";
        document.getElementById("animate-this").className = "container noneAnime animated";
        document.getElementById("snoopDogg").style.display = "none";
        document.getElementById("smokeDogg").style.display = "none";

        
    }
}, 100);






// changes the colour of the box to a random colour when clicked
var boxButton = document.querySelector('.box');

boxButton.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};


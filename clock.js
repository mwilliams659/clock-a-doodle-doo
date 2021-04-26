
// Calculates the time (now, minutes and hour) and stores in the dateTime variable.
function getTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    if(hour.toString().length == 1) {
            hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
            minute = '0'+minute;
    }  
    var dateTime = hour+':'+minute;  
    return dateTime;
}

// displays the current time 
var currentTime = getTime()
setInterval(function(){
    currentTime = getTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 100);


// This function plays a sound effect when you click the clock/gifs
let sound = document.getElementById('audio3')
let play = document.getElementById('main')
play.onclick = function() {
    sound.play();
    return false;
};

// List of significant times of the day
var timesList = ['00:00', '01:01', '01:10', '01:11', '01:23', '02:02', '02:20', '02:22', '03:00', '03:03', '03:33', '04:04', '04:20', '05:05', '05:55', '06:00', '06:06', '07:07', '08:08', '08:50', '09:00', '09:09', '10:10', '11:11', '12:00', '12:12', '12:21', '12:34', '13:13', '13:57', '14:14', '15:00', '15:15', '16:16', '16:20', '17:17', '18:00', '18:18', '19:19', '20:20', '21:00', '21:21', '22:22', '23:23', '23:45'];
var snoopList = ['04:20', '16:20'];

// Checks time to change elements
setInterval(function(){
    if (timesList.includes(currentTime)) {
        document.getElementById("animate-this").className = "container funAnime animated";
        var now     = new Date(); 
        var second  = now.getSeconds();
        if (second === 0) {
            // this is when the audio gets played
            if (snoopList.includes(currentTime)) {
                document.getElementById("audio2").play();
                document.getElementById("inTheBack").className = "snoopTime";
                // this is when snoop dogg comes on (i.e it's 04:20/16:20)
                document.getElementById("snoopDogg").style.display = "block";
                document.getElementById("smokeDogg").style.display = "block";
            // This is when the audio, gifs and background get triggered
            } else {
            document.getElementById("audio1").play();
            document.getElementById("inTheBack").className = "wowTime";
            document.getElementById("missionPassed").style.display = "block";
            document.getElementById("catDogg").style.display = "block";
            }
        }
    }
    else {
        // this is when there is not a significant time
        document.getElementById("inTheBack").className = "regularTime";
        document.getElementById("animate-this").className = "container noneAnime animated";
        document.getElementById("snoopDogg").style.display = "none";
        document.getElementById("smokeDogg").style.display = "none";
        document.getElementById("catDogg").style.display = "none";
        document.getElementById("missionPassed").style.display = "none";

        
    }
}, 100);






// changes the colour of the clock to a random colour when clicked
var boxButton = document.querySelector('.box');

boxButton.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};



// background gradient generator

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("inTheBack");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// Inputs to select two colours to form background gradient
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

var curTime;
var doneTime = 1611237600;
var diff;
var done;
var yrs,mths,days,hrs,mnts,secs;
var seconds = 31557600;


var app = new Vue({
	el:"#app",
	data:{

		countdown: "" 

	}
});
	var update = function(){
	curTime = Math.round(new Date().getTime()/1000.0);
	diff = doneTime - curTime;
	yrs = Math.floor(diff/31557600); // 31557600 is amt of seconds in a year
	done = yrs * 31557600;
	mths = Math.floor((diff - done) / 2592000);
	done += mths * 2592000;
	days = Math.floor((diff - done) / 86400);
	done += days * 86400;
	hrs = Math.floor((diff - done) / 3600);
	done += hrs * 3600;
	mnts = Math.floor((diff - done) / 60);
	done += mnts * 60;
	secs = diff - done;

	app.countdown = yrs + " : " + mths + " : " + days + " : " + hrs + " : " + mnts + " : " + secs; 
}

setInterval(update, 100);
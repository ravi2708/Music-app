music_name= "songs/MereNishan.mp3"
var play_btn = document.getElementById("play");
var next_btn = document.getElementById("next");
var prev_btn = document.getElementById("prev");
var range = document.getElementById("range");
var play_ing = document.getElementById("play_ing");
var isPlaying = false;
var duration = 0;
var currentTime = 0;

var Song = new Audio();
window.onload = playsong;

function playsong(){
	Song.src = music_name;
	
	play_btn.addEventListener('click', function(){
		if(!isPlaying){
			Song.play();
			isPlaying = true;
			duration = Song.duration;
			range.max = duration;
			play_ing.src = "image/pause.png";
		 }
		else{
			Song.pause();
			isPlaying = false;
			play_ing.src = "image/play.png";
		}
		
		range.addEventListener('change',function(){
			Song.currentTime = range.value;
		})
		
		Song.addEventListener('timeupdate',function(){
			range.value = Song.currentTime;
		})
		
		Song.addEventListener('ended', function(){
			Song.currentTime = 0;
			Song.pause();
			isPlaying = false;
			range.value = 0;
			play_ing.src = "image/play.png";
		})
	 })
}
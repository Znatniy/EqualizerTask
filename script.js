document.querySelector('#play').onclick = play;
document.querySelector('#stop').onclick = stop;
document.querySelector('#pause').onclick = pause;
document.querySelector('#repeat').onclick = repeat;
document.querySelector('#volume').onclick = volumeEdit;
let audio = document.querySelector('#audio_player');
function play() {
    audio.play();
}
function stop() {
    audio.pause();
    audio.currentTime = 0;
}
function pause() {
    audio.pause();
}
function repeat() {
    audio.currentTime = 0;
    play();
}
function volumeEdit() {
    console.log(this.value);
    let val = this.value;
    audio.volume = val / 100;
}

var c_canvas = document.getElementById("grid");
var context = c_canvas.getContext("2d");
for (var x = 0.5; x < 400; x += 10) {
    context.moveTo(x, 0);
    context.lineTo(x, 400);
}
for (var y = 0.5; y < 400; y += 10) {
    context.moveTo(0, y);
    context.lineTo(400, y);
}
context.strokeStyle = "#888";
context.stroke();

// Ocean background soundtrack starts playing when the sun is clicked
let onclick = document.getElementById("play");
function playMusic() {
  let audio = new Audio("Audio/ocean.mp3");
  audio.play();
}
play.addEventListener("click", playMusic);

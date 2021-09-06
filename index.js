window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio)return; // stop running the function if no audio is found for key
  audio.currentTime = 0; // rewind to the start
  audio.play();
});
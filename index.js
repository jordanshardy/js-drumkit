function playSound (e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio)return; // stop running the function if no audio is found for key
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing'); //on key add class list of playing to key variable
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return; // skip if it is not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
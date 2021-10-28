

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const keyName = document.querySelector(`.key[data-key="${e.code}"]`);
    // console.log(e)
    if(!audio) return;
 
    audio.currentTime = 0;
    audio.play();
    keyName.classList.add('playing');
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;

     this.classList.remove('playing');
}
window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

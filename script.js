
function removeTransition(e){
    if(e.propertyName !== 'transform') return;//skip if o transform
    e.target.classList.remove('playing');//e.target will give the div of this class .card
}

function playAudio(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.card[data-key="${e.keyCode}"]`);
    if(!sound) return;

    key.classList.add('playing');
    sound.currentTime=0;
    sound.play();
};



const keys = Array.from(document.querySelectorAll('.card'));//This retuurns a node list and it cannot access directly for trasition end
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playAudio);
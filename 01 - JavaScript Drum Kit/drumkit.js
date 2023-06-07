window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio || !key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
 });

 window.addEventListener('keyup',function(e){
    const keys = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!keys) return;
    keys.classList.remove("playing");
 })
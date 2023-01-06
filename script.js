function main(){
function getsec (segundos) {
    const date = new Date(segundos *1000);
    return date.toLocaleTimeString('pt-BR' , {
        hour12: false,
        timeZone: 'GMT'
    });
}
const timer = document.querySelector('.timer');
const on = document.querySelector('.on');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let relogio;
let segundos = 0;

function timerOn () {
relogio = setInterval(function(){
    segundos++ ;
    timer.innerHTML = getsec(segundos);   
}, 1000);
}

on.addEventListener('click', function(e){
    timer.classList.remove('pausado');
    clearInterval(relogio);
    timerOn();
});
pause.addEventListener('click', function(e){
    timer.classList.add('pausado');
    clearInterval(relogio);
});
reset.addEventListener('click', function(e){
    timer.classList.add('pausado');
    clearInterval(relogio);
    timer.innerHTML= '00:00:00';
    segundos= 0;
});
}
main();
// document.querySelector() ищет на странице первый елемент button.
const start__button = document.querySelector('.start__button'); 
const work__button = document.querySelector('#work__button'); 
const rest__button = document.querySelector('#rest__button'); 
const stop__button = document.querySelector('.stop__button');
const timer = document.querySelector('.pomodoro__time');
const focus__rest = document.querySelector('.focus__rest');
//count переменная просто для теста. давайте сделаем из нее 25 минут
let count = 25*60;
 let minutes = Math.floor(count/60);
    let seconds = Math.floor(count%(60));
let work = true; 
let isRunning = false;
let unique__interval = null;
const button__sound = document.querySelector("#button__sound")
const start__sound = document.querySelector("#start__sound")
//когда нажимаем на кнопку мы запускаем какую то функцию
function play__sound(){
    button__sound.currentTime =0;   
    button__sound.play().catch(()=>{});
}
function play__start(){
    start__sound.currentTime =0;
    start__sound.play().catch(()=>{});
}
start__button.addEventListener('click',()=>{  
    play__sound();
   
        if(isRunning){
            return;
        }
        isRunning=true;
        updateTime();
        play__start();
    unique__interval = setInterval(()=>{
        count--;
        updateTime();

        
    },1000)
});
work__button.addEventListener('click',()=>{
    play__sound();

    work=true;
     count=25*60;
     stopTimer(count);
    updateTime();
    updateMode();
    work__button.classList.add('active');
    rest__button.classList.remove('active');
 
      
})
rest__button.addEventListener('click',()=>{
    play__sound();

    work=false;
    count=5*60;
    stopTimer(count);
    updateTime();
    updateMode();
    rest__button.classList.add('active');
    work__button.classList.remove('active');
    
})
stop__button.addEventListener('click',()=>{
    play__sound();

    stopTimer(25*60);
})
function stopTimer(newCount){
    clearInterval(unique__interval);
    isRunning=false;
    count=newCount;
    updateTime();

}

function updateTime(){
minutes = Math.floor(count/60);
        seconds = Math.floor(count%(60));
        if(minutes>=10 && seconds>=10)
        timer.textContent = `${minutes}:${seconds}`
        else if(minutes<10 && seconds>=10)
        timer.textContent = `0${minutes}:${seconds}`
        else if(minutes>=10 && seconds<10)
        timer.textContent = `${minutes}:0${seconds}`
        else if(minutes<10 && seconds<10)
        timer.textContent = `0${minutes}:0${seconds}`
}
function updateMode(){
    if(work){
        focus__rest.textContent = 'Focus'
    }
    else{
        focus__rest.textContent = 'Rest'

    }
    return;
}






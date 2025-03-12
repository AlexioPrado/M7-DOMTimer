let start = document.getElementById('startTimer');
let stop = document.getElementById('stopTimer');
let reset = document.getElementById('resetTimer');

let timer;
let pause;
start.onclick = function(){
    if(timer){
        if (pause){
            clock()
            timer = setInterval(clock, 1000);
            pause = false;
        }else{
            return
        }
    } else {
        clock()
        timer = setInterval(clock, 1000);
    }
}
stop.onclick = function(){
    clearInterval(timer)
    pause = true;
}
reset.onclick = function(){
    day.innerHTML = '00';
    hour.innerHTML = '00';
    second.innerHTML = '00';
    clearInterval(timer)
    timer = undefined;
    pause = false;
}

let day = document.getElementById('day');
let hour = document.getElementById('hour');
let second = document.getElementById('second');

function clock(){
    let snum = Number(second.innerHTML);
    let hnum = Number(hour.innerHTML);
    let dnum = Number(day.innerHTML);
    if (snum + 1 == 60){
        second.innerHTML = '00';
        if (hnum + 1 == 24){
            hour.innerHTML = '00';
            day.innerHTML = dnum + 1;
        }else{
            hour.innerHTML = hnum + 1;
        }
    }else{
        second.innerHTML = snum + 1;
    }
}
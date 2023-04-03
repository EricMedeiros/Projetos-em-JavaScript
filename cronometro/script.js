var res = document.getElementById("res");
var btn = document.querySelector("button");

btn.addEventListener('click',()=>{
    start()
});

function start(){
    var s = 0;
    var m = 0;
    var h = 0;
    setInterval(()=> {
    s++
    let seg = s.toString().padStart(2,'0');
    let min = m.toString().padStart(2,'0');
    let hor = h.toString().padStart(2,'0');
    if(seg<10){
    res.textContent= `${hor}:${min}:${seg}`
    } 
    else if(seg<60){
    res.textContent= `${hor}:${min}:${seg}`
    }else{
    res.textContent= `${hor}:${min}:00`
    s=0
    m++
    };
    if(m = 60){
    m=0
    h++

    }
    

    },1000)
};
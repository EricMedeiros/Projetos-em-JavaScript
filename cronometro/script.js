var selectseg = document.getElementById('segundos');
var selectmin = document.getElementById('minutos');
var tela = document.getElementById('tela');
var começar = document.getElementById('comecar');
var body = document.getElementsByTagName('body')

for(i=1;i<=60;i++){
    selectseg.innerHTML += `<option value="${i}"> ${i} </option>`;
}
for(i=0;i<=60;i++){
    selectmin.innerHTML += `<option value="${i}"> ${i} </option>`; 
}
var minatual;
var segatual;
var interval;

    
começar.addEventListener('click',function(){
    minatual = selectmin.value;
    segatual = selectseg.value;
    
    tela.childNodes[1].innerHTML= minatual +':'+segatual;

    interval= setInterval(function(){
        segatual--;
        
        if(segatual<=0){
            if(minatual>0){
                minatual--;
                segatual= 59;
            } else{
                clearInterval(interval);
                tela.childNodes[1].innerHTML= '00:00';
                document.body.style.backgroundColor= 'red'
        }

        }
        if(segatual<10){
        var x='0'
    }else{var x = ""}
    if(minatual<10){
        var y= '0'
    }else{var y=""}
        tela.childNodes[1].innerHTML= y+minatual +':'+x+segatual;
    },1000);
})



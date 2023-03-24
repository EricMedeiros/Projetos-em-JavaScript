var vermelho = document.querySelector("#vermelho");
var amarelo = document.querySelector("#amarelo");
var verde = document.querySelector("#verde");
var desligado = document.querySelector("#desligado");
var Cvermelho = document.getElementById("Cvermelho");
var Camarelo = document.getElementById("Camarelo");
var Cverde = document.getElementById("Cverde");

vermelho.addEventListener('click', function(){
    clearInterval(interval)
    Fvermelho()
});
var f = 0;
function Fvermelho() {
    
    if(f == 0){
        Cvermelho.style.backgroundColor = 'red';
        f++
        Camarelo.style.backgroundColor = 'rgba(255, 255, 0, 0.356)';
        a=0
        Cverde.style.backgroundColor = 'rgba(122, 252, 36, 0.342)';
        b=0
        p = 0;
    }else{
        Cvermelho.style.backgroundColor = 'rgba(255, 0, 0, 0.342';
        f=0
    };
    
};

amarelo.addEventListener('click', function(){
    clearInterval(interval)
    Famarelo()
});
var a= 0;
function Famarelo() {
    if(a == 0){
        Camarelo.style.backgroundColor = 'yellow';
        a++
        Cvermelho.style.backgroundColor = 'rgba(255, 0, 0, 0.342';
        f=0
        Cverde.style.backgroundColor = 'rgba(122, 252, 36, 0.342)';
        b=0
        p = 0;
    }else{
        Camarelo.style.backgroundColor = 'rgba(255, 255, 0, 0.356)';
        a=0
    };
    
};

verde.addEventListener('click', function(){
    clearInterval(interval)
    Fverde()
});
var b = 0;
function Fverde() {
    if(b == 0){
        Cverde.style.backgroundColor = 'rgb(122, 252, 36)';
        Cvermelho.style.backgroundColor = 'rgba(255, 0, 0, 0.342';
        f=0
        Camarelo.style.backgroundColor = 'rgba(255, 255, 0, 0.356)';
        a=0
        b++
        p = 0;
    }else{
        Cverde.style.backgroundColor = 'rgba(122, 252, 36, 0.342)';
        b=0
    };

};


var interval;
var i = 0;
var p = 0;
automático.addEventListener('click', function(){
    if(p==0){
        interval=setInterval(function(){
    let sinais = [Fvermelho,Famarelo,Fverde];
    
      sinais[i]();

      if (i < 2) {
        i++
      }else{
        i = 0;
    };
     
    
    p++
      
    },1* 1000)
}});
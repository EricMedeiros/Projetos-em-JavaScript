var vermelho = document.querySelector("#vermelho");
var amarelo = document.querySelector("#amarelo");
var verde = document.querySelector("#verde");
var desligado = document.querySelector("#desligado");
var img = document.querySelector("img");

vermelho.addEventListener('click', function(){
    clearInterval(interval)
    Fvermelho()
});

function Fvermelho() {
    img.src = "img/vermelho.png";
    
};

amarelo.addEventListener('click', function(){
    clearInterval(interval)
    Famarelo()
});

function Famarelo() {
    img.src = "img/amarelo.png";
    
};

verde.addEventListener('click', function(){
    clearInterval(interval)
    Fverde()
});

function Fverde() {
    img.src = "img/verde.png";

};


var interval;
var i = 0;

automático.addEventListener('click', function(){
    interval=setInterval(function(){
    let sinais = [Fvermelho,Famarelo,Fverde];

      sinais[i]();

      if (i < 2) {
        i++
      }else{
        i = 0;
    };

      
      
    },1* 1000)
});
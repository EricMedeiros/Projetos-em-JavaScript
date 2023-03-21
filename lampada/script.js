var btnOn = document.querySelector("#ligar");
var btnOff = document.querySelector("#desligar");
var lamp = document.querySelector("#lamp");
var desligada = document.getElementById("desligada")
var ligada = document.getElementById("ligada")
var quebrada = document.getElementById("quebrada")




lamp.addEventListener('dblclick',function(){
    quebrada.style.display="inline";
    desligada.style.display = "none";
    ligada.style.display = "none";
    ligada.remove(true)
    desligada.remove(true)
    
});

btnOn.addEventListener('click',function (){
    ligar()
});
function ligar(){
    if(ligada.style.display = "none"){

        desligada.style.display = "none";
        ligada.style.display = "inline";        
    }
}



btnOff.addEventListener('click',function apagar(){
    if(ligada.style.display = "inline"){

        desligada.style.display = "inline";
        ligada.style.display = "none";        
    }
});

lamp.addEventListener('mouseover',function ligar(){
    if(ligada.style.display = "none"){

        desligada.style.display = "none";
        ligada.style.display = "inline";        
    }
});

lamp.addEventListener('mouseout',function apagar(){
    if(ligada.style.display = "inline"){

        desligada.style.display = "inline";
        ligada.style.display = "none";        
    }
});




/*btnOn.addEventListener('click',function(){
    lamp.remove();
    var img = new Image();
    img.src =  "img/ligada.jpg"
    img.alt = "ligada"
    
    document.body.insertBefore(img,text.nextSibling)
});
btnOff.addEventListener('click',function(){
    lamp.remove();
    var img = new Image();
    img.src =  "img/desligada.jpg"
    img.alt = "desligada"
});*/
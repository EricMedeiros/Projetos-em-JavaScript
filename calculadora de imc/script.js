var nome = document.querySelector("#inome");
var altura = document.querySelector("#ialtura")
var peso = document.querySelector("#ipeso");
var btn = document.querySelector("#btn");
var resImc = document.querySelector("#resImc")
var foto = document.getElementById("res");

btn.addEventListener('click',function(){
    if(document.querySelector("#res img")){
        var img = document.querySelector("#res img");
        foto.removeChild(img)};
    calcular();
    
});

function calcular(){
   var imc = peso.value / (altura.value)**2;
    
    
    if(imc<16){
        resImc.textContent = "magreza grau III";
        var img = document.createElement('img');
        img.setAttribute('src','pokemons/magreza3.gif');
        img.setAttribute('id','pokemon');
        foto.appendChild(img);
        foto.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else if(imc>=16 && imc<=16.9){
        resImc.textContent = "magreza grau II";
        var img = document.createElement('img');
        img.setAttribute('src','pokemons/magreza2.gif');
        img.setAttribute('id','pokemon');
        foto.appendChild(img);
        foto.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      } else if(imc>=17 && imc<=18.4){
            resImc.textContent = "magreza grau I";

            var img = document.createElement('img');
            img.setAttribute('src','pokemons/magreza1.gif');
            img.setAttribute('id','pokemon');
            foto.appendChild(img);
            foto.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        } else if(imc>= 18.5 && imc<=24.9){
                resImc.textContent = "adequado";
                var img = document.createElement('img');
                img.setAttribute('src','pokemons/adequado.gif');
                img.setAttribute('id','pokemon');
                foto.appendChild(img);
                foto.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            } else if(imc>=25 && imc<=29.9){
                resImc.textContent = "pre-obeso";
                var img = document.createElement('img');
                img.setAttribute('src','pokemons/pre obeso.gif');
                img.setAttribute('id','pokemon');
                foto.appendChild(img);
                foto.style.backgroundColor = 'rgba(0, 0, 0, 0)';
              } else if(imc>=30 && imc<=34.9){
                resImc.textContent = "obesidade grau I";
                var img = document.createElement('img');
                img.setAttribute('src','pokemons/obeso grau 1.gif');
                img.setAttribute('id','pokemon');
                foto.appendChild(img);
                foto.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                window.alert('ola '+ nome.value +', talvez essa informação seja um pouco dura.')
                } else if(imc>=35 && imc<=39.9){
                    resImc.textContent = "obesidade grau II";
                    var img = document.createElement('img');
                    img.setAttribute('src','pokemons/obeso grau 2.gif');
                    img.setAttribute('id','pokemon');
                    foto.appendChild(img);
                    foto.style.backgroundColor = 'rgba(0, 0, 0, 0)'
                    window.alert('ola '+ nome.value +', talvez essa informação seja um pouco dura.');

                  } else if(imc>=40){
                      resImc.textContent = "obesidade grau III";
                      var img = document.createElement('img');
                      img.setAttribute('src','pokemons/obeso grau 3.gif');
                      img.setAttribute('id','pokemon');
                      foto.appendChild(img);
                      foto.style.backgroundColor = 'rgba(0, 0, 0, 0)'
                      window.alert('ola '+ nome.value +', talvez essa informação seja um pouco dura.');}

    nome.value = ""
    altura.value = ""
    peso.value = ""
}
                  
    
    

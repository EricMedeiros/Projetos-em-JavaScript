var btn= document.querySelector("button");

btn.addEventListener('click', function(){
    processUserInput(saudacao); 
})

var saudacao = (name) => alert('Olá ' + name);
  
var processUserInput = (callback) => {
    var name = prompt('Por favor insira seu nome.');
    callback(name);
  }
  
  
  
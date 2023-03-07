var itens = ['laranja','maça','uva','manga','banana'];

var listaul = document.createElement('ul');

var body = document.getElementsByTagName('body');

body[0].appendChild(listaul);

var listaNoBody = document.getElementsByTagName('ul')

for(var i=0; i<itens.length;i++){

    var li = document.createElement('li')

    var text = document.createTextNode(itens[i]) 

    li.appendChild(text)
    
    listaNoBody[0].appendChild(li)
}
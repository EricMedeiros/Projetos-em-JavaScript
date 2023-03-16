var add = document.getElementById('add');

add.addEventListener('click', function(e){

    e.preventDefault();
    
    addTask();


});

function addTask(){
    
    var input = document.getElementById('itarefa');

    if(input){
        const template = document.querySelector(".template");
        
        const newTask = template.cloneNode(true);

        newTask.querySelector(".tarefa p").textContent = input.value;
        
        newTask.classList.remove("hide");
        newTask.classList.remove("template");

        const list= document.getElementById("lista");

        list.appendChild(newTask);

        document.getElementById('itarefa').value = "";
        //adicionando botão
        const btnRemove = newTask.querySelector("#deletar").addEventListener('click', function(){
            deletar(this);
        });
        const btndone = newTask.querySelector('#cumprida').addEventListener('click', function(){
            concluir(this)
        });

    }
};

function concluir(task){

    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
};

function deletar(task){
    task.parentNode.remove(true);
};


 /*function criarNovaDiv(){

    

    var count = 0;
    ul.innerHTML += ('<li id=" tag'+ count +'"> <span class="tarefa"><p>'+ input.value +'</p></span><span class="material-symbols-outlined" ><p>done</p></span>  <span class="material-symbols-outlined"><p>close</p></span></li>');

    cumprida.addEventListener('click',function(){
        var tag = document.getElementById('tag'+count);
        tag.setAttribute("class","hide");
    });*/
    

//};

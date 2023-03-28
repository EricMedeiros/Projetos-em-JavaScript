var prato = document.querySelector("#prato")

window.addEventListener('keyup', (event)=>{
    if(event.key=== "e"){
        var audio = new Audio("audio/prato_de_bateria_efeito_sonoro_toquesengracadosmp3.com.mp3");
        audio.play();
        prato.classList.add("circle")
        
    }
});
window.addEventListener('keydown',(event)=> {
    if(event.key === "e"){
        prato.classList.remove('circle')
    }
})
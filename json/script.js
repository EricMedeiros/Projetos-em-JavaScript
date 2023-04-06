const obj = [
    {
        "nome": "eric",
        "idade": 20,
        "esta trabalhando":true,
        "detalhes_profissão": {
            "profissão": "dev",
            "empresa": "empresa X"
        },
        "hobbies": ["jogar", "prog","ler"]
    },
    {
        "nome": "joão",
        "idade": 20,
        "esta trabalhando":false,
        "detalhes_profissão": {
            "profissão": "null",
            "empresa": "null"
        },
        "hobbies": ["jogar", "academia"]
    }
]

console.log(obj)

//JSON
//convertendo objetos para JSON

const jsonData = JSON.stringify(obj)

console.log(jsonData)

//convertendo JSON para objeto

const objData = JSON.parse(jsonData)

//acessando um dado

objData.map((pessoa)=>{
    console.log(pessoa.idade)
});

obj.map((pessoa)=>{console.log(pessoa.detalhes_profissão.profissão)})

//adicionando novas elementos a um objeto

obj[0].novidades = "jonh wick 4";

obj.map((dados)=>{
    console.log(dados.novidades)
})

//criando e citando objetos

const obj2 = {
    nomenew: "eric",
    idadenew: 20
};

let {nomenew: onlyname, idadenew: onlyage } = obj2;

console.log(onlyname, onlyage + ' anos')

//destructuring function
var teste = (valor1) => {  
    return { valor1: valor1, valor2: "valor2" };
  }
  

var mult = (callback) => {
    var valor1 = 5*5;
   return callback(valor1)
}
mult(teste)



let {valor1: var1, valor2: var2} = mult(teste);

console.log(var1)


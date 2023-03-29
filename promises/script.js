//criação de promessa
const mypromise = new Promise((resolve, reject)=>{
    const nome = 'Eric'
    if(nome === 'Eric'){
        resolve('usuario encontrado!');
    }else{
        reject('usuário não encontrado!');
    }
})

mypromise.then((data) =>{
    console.log(data)
})

//encadeamento de then's

const mypromise2 = new Promise((resolve, reject)=>{
    const nome = 'Eric'
    if(nome === 'Eric'){
        resolve('usuario '+ nome +' encontrado!');
    }else{
        reject('usuário '+ nome +' não encontrado!');
    }
})

mypromise2.then((data) => {
    return data.toLowerCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

// tratando a resposta reject, usando catch

const mypromise3 = new Promise((resolve, reject)=>{
    const nome = 'douglas'
    if(nome === 'Eric'){
        resolve('usuario '+ nome +' encontrado!');
    }else{
        reject('usuário '+ nome +' não encontrado!');
    }
})

mypromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('ocorreu um erro: '+ err )
})

// resolver varias promises de uma vez, usando metodo all
//espera todas estarem prontas para devolver um valor

const p1 = new Promise((resolve, reject) => {
    resolve('ok!')
})
const p2 = new Promise((resolve, reject) => {
    resolve('ok!')
})
const p3 = new Promise((resolve, reject) => {
    resolve('ok!')
})
const allPromises = Promise.all([p1,p2,p3]).then((data)=> {
    console.log(data)
})

//varias promessas com o método race
//mostra a promise que for resolvida primeiro

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok! timeout')
    },2000)
    
})
const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok!')
})
const p6 = new Promise((resolve, reject) => {
    resolve('p6 ok!')
})
const allPromises2 = Promise.race([p4,p5,p6]).then((data)=> {
    console.log(data)
})

//fetch request na API do github
//fetch API

const username = 'ericmedeiros'

fetch(`https://api.github.com/users/${username}`,{
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data)=> {
    console.log(data)
}).catch((err)=> {
    console.log(`ocorreu um erro: ${err}`)
})

function exemplo() {
    return new Promise((resolver)=> {
    setTimeout(()=>{
        num = Math.floor(Math.random()*10)+1;
        resolver()
    },2000)
})
};
var num = 0;
  async function gerarnumero() {
    
    await exemplo()
    console.log(num)
}

gerarnumero()
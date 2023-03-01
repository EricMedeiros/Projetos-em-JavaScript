//tudo que está dentro de chaves é um objeto

var book = {
topic: "javascript"
};
console.log(book["topic"])

//arrays colocando valores dentro
var primes = [2,3,5,7]
primes.length // quantidade de elementos dentro array
primes.push(13,17) //adiciona valores
primes.reverse() //troca a ordem
console.log(primes[0])
console.log(primes)


var n = 5
var produto = 1;
while(n>1){
   
   produto *=n;
   n--;



}
console.log(produto)

var hoje = new Date();
console.log(hoje.getHours())

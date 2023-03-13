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

var x =0
var looping = setInterval(function(){
   console.log(x)
  
   x++;
   /*if(x>10){
   clearInterval(looping);
   console.log('finished');
}*/
}, 500 );

setTimeout(function(){
   console.log('se passaram 2 segundos!!!');
   clearInterval(looping);
},2000)


function calcular(){
var p1x = document.getElementById('p1x')
var p1y = document.getElementById('p1y')
var p2x = document.getElementById('p2x')
var p2y = document.getElementById('p2y')
var a = (p2x.value - p1x.value)
var b = (p2y.value - p1y.value)
var soma =Math.sqrt(a*a + b*b)
var res = document.getElementById('res')
res.innerHTML = `a distância entre os pontos é ${soma}`;
};
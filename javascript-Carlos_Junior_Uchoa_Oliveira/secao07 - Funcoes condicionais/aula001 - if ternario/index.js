// if-ternário
let idade = Number(prompt("Qual a sua idade? "));
idade >= 18 ? alert("Maior de idade!") : alert("Menor de idade!");

// funções com parâmetros
function somarNumeros(a, b) {
  return a + b;
}

let num1 = 10;
let num2 = 30;
let soma = somarNumeros(num1, num2);
console.log(`A soma entre ${num1} e ${num2} vale ${soma}`);

// funções com parâmetros opcionais
function somar(a, b = 0) {
  return a + b;
}
console.log(somar(5));
console.log(somar(5, 5));

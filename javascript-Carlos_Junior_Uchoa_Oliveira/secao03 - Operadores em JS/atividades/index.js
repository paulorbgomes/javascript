// Atividade 1:
let a = 15;
let b = 10;
console.log(a > b);

// Atividade 2:
let aa = "100";
let bb = 100;
console.log(aa === bb);

// Atividade 3:
let ab = 15;
let bc = 20;
//console.log(ab < bc);
console.log(ab != bc);

// Atividade 4:
let precoGas = 4.75;
precoGas <= 5 ? console.log("Preço Barato!") : console.log("Preço Caro!");

// Atividade 5:
let totalAlunos = 580;
let retornaram = 230;
let pFora = 100 - (230 * 100) / 580;
console.log(`${pFora}% de alunos permaneceram no intervalo!`);

/*
// Atividade 6:
let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite a sua altura: "));
let imc = peso / (altura * altura);
if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc >= 18.5 && imc <= 24.99) {
  console.log("Normal");
} else if (imc >= 25 && imc <= 29.99) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
*/

// Atividade 7:
let numero = Number(prompt("Digite um número inteiro: "));
if (numero % 2 === 0) {
  console.log(`O número ${numero} é PAR!`);
} else {
  console.log(`O número ${numero} é ÍMPAR!`);
}

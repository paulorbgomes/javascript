// 1
console.log("Desafio 1");
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// 2
console.log("Desafio 2");
let numero = 0;
while (numero < 5) {
  console.log(numero);
  numero++;
}

// 3
console.log("Desafio 3");
let preco = Number(prompt("Valor do produto R$: "));
for (let i = 1; i <= 5; i++) {
  let parcela = preco / i;
  console.log(`${i}x de R$ ${parcela.toFixed(2)}`);
}

// 4
console.log("Desafio 4");
let entrada = Number(prompt("Digite um número inteiro: "));
console.log(`Tabuada de multiplicação do número ${entrada}`);
for (let i = 0; i <= 10; i++) {
  console.log(`${entrada} x ${i} = ${entrada * i}`);
}

// 5
console.log("Desafio 5");
let valorEmprestado = 3000;
let mes = 1;
while (mes <= 5) {
  valorEmprestado = valorEmprestado + valorEmprestado * 0.02;
  console.log(`Valor no mês ${mes}: R$ ${valorEmprestado.toFixed(2)}`);
  mes++;
}

// 6
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

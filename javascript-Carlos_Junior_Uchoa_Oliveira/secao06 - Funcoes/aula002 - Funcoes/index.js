// Função sem parâmetros e sem retorno
function boasVindas() {
  console.log("Seja bem-vindo!");
}
boasVindas();

// Função sem parâmetros e com retorno
function retornaNumero() {
  return 10;
}
let valor = retornaNumero();
console.log(valor);

// Função com parâmetros e sem retorno
function somaNumeros(a, b) {
  console.log(a + b);
}
somaNumeros(20, 30);

// Função com parâmetros e com retorno
function multiplicaNumeros(a, b) {
  return a * b;
}
let m = multiplicaNumeros(15, 2);
console.log(m);

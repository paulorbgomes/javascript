function somaNumeros(a, b) {
  return a + b;
}

function aninhada(a, b, c) {
  return somaNumeros(a, c) + somaNumeros(b, c);
}

console.log(aninhada(2, 4, 2));

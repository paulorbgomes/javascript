let numeros = [2, 3, 1, 4, 2];

// Reduce ...
let resultado = numeros.reduce(function (
  previousValue,
  currentValue,
  currentIndex,
  numeros
) {
  return previousValue + 10;
});
console.log(numeros);
console.log(resultado);

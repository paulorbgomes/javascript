let numeros = [2, 3, 1, 4, 2];

// Every ...
let verificaEvery = numeros.every(function (valor) {
  return valor >= 1;
});
console.log(numeros);
console.log(verificaEvery);

// Some ...
let verificaSome = numeros.some(function (valor) {
  return valor >= 4;
});
console.log(numeros);
console.log(verificaSome);

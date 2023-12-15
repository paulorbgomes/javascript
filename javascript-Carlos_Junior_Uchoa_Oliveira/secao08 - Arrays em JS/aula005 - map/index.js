let nomes = ["Carlos", "Uchôa", "Leonardo", "Luis", "João"];
let numeros = [2, 3, 1, 4, 2];

// Map ...
let numerosDobro = numeros.map(function (n) {
  return 2 * n;
});
console.log(numeros);
console.log(numerosDobro);

let nomesMaiusculo = nomes.map(function (i) {
  return i.toLocaleUpperCase();
});
console.log(nomes);
console.log(nomesMaiusculo);

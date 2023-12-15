let array = ["Carlos", "Uchoa", 28, true, 20];
console.log(array.indexOf("Carlos"));
console.log(array.indexOf("Paulo Ricardo"));

let numeros = [2, 3, 2, 4, 2];
console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(2));
console.log(
  numeros.findIndex(function (n) {
    return n >= 4;
  })
);

console.log(numeros);
console.log(numeros.slice(1, 4));

let numeros = [1, 2, 3, 4, 5];

console.log("Loop while ...");
let i = 0;
while (i < numeros.length) {
  console.log(numeros[i]);
  i = i + 1;
}

console.log("Loop for ...");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Loop do while ...");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 20);

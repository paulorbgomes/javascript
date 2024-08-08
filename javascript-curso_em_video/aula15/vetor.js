let num = [5, 8, 2, 9, 3];
num.sort();

/*
for (let p = 0; p < num.length; p = p + 1) {
  console.log(`A posição ${p + 1} tem o valor ${num[p]}`);
}
*/

for (let p in num) {
  console.log(`A posição ${p + 1} tem o valor ${num[p]}`);
}

console.log(num.indexOf(9));

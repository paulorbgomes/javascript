let array = ["Carlos", "Júlio", "Maria", 120, 12.9];
console.log(array);
console.log(array.length);
console.log(array[2]);

array[0] = "Carlos Uchôa";
console.log(array);

array.push("Paulo");
console.log(array);
console.log(array.length);

array.shift();
console.log(array);
console.log(array.length);

console.log(array.indexOf("Paulo"));

array.pop();
console.log(array);
console.log(array.length);

array.unshift("Gomes");
console.log(array);

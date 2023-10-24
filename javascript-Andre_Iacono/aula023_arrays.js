let num = [7, 8, 9];

num.push(10, 11, 12);
num.unshift(1, 2, 3);
num.splice(3, 0, 4, 5, 6);

console.log(num);
//console.log(num.indexOf(12));
//console.log(num.includes(100));

num.pop();
num.shift();
console.log(num);

// Esvaziando uma array ...
//num = [];
//num.length = 0;
//num.splice(0,num.length);
//console.log(num);

let num2 = [20, 30, 40];
let all = num.concat(num2);
let sl = all.slice(7,9);
console.log(all);
console.log(sl);

let clientes = ["Andre", "Marcela", "Jose"];
console.log(clientes.join(", "));
console.log(clientes.sort());
console.log(clientes.reverse());

const temp = [-1, 2, 3, 4, 5, -79, -67];
const ver = temp.filter(function(valor) {
    return valor >= 0;
});
console.log(ver);



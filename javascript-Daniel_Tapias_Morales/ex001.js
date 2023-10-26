// Pedir para o usuario digitar um numero
let num1 = prompt("Por favor, digite um numero: ");

// Converter em numero inteiro
//num1 = Number(num1);
num1 = parseInt(num1);

// Pedir para o usuario digitar outro numero
let num2 = prompt("Por favor, digite outro numero: ");

// Converter em numero inteiro
//num2 = Number(num2);
num2 = parseInt(num2);

// Mostrar a soma concatenando com o texto "a soma é: ..."
let soma = num1 + num2;
console.log(`O valor de ${num1} + ${num2} e igual a ${soma}`);

// Mostrar a subtração concatenando com o texto "a subtração é: ..."
let sub = num1 - num2;
console.log(`O valor de ${num1} - ${num2} e igual a ${sub}`);

// Mostrar a multiplicação concatenando com o texto "a multiplicação é: ..."
let mul = num1 * num2;
console.log(`O valor de ${num1} * ${num2} e igual a ${mul}`);

// Mostrar a divisão concatenando com o texto "a divisão é: ..."
let div = num1 / num2;
console.log(`O valor de ${num1} / ${num2} e igual a ${div}`);

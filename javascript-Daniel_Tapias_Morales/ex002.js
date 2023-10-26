// Pedir para o usuario digitar um numero
let num1 = prompt("Digite o valor do primeiro numero: ");

// Converter em numero inteiro
num1 = parseInt(num1);

// Pedir para o usuario digitar outro numero
let num2 = prompt("Digite o valor do segundo numero: ");

// Converter em numero inteiro
num2 = parseInt(num2);

// Mostrar um alert com o seguinte texto: O resto da divisao de (n1) por (n2) e: (resultado);
let resultado = num1 % num2;
alert("O resto da divisao de " + num1 + " por " + num2 + " e: " + resultado);

// // Mostrar um alert com o seguinte texto: O numero (n1) elevado a (n2) e: (resultado);
resultado = num1 ** num2;
alert("O numero " + num1 + " elevado a " + num2 + " e: " + resultado);

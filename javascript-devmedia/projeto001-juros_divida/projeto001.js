// Sistema que calcula os juros de uma dívida com base no número de dias passados

import input from 'readline-sync';

console.log("Aplicacao de Juros: ");

// Entrada
let valor = Number(input.question("Informe o valor devido: R$ "));
let dias = Number(input.question("Informe quantos dias se passaram desde o vencimento do boleto: "));

// Processamento
let valorTotal = null;
let juros = null;
if(dias > 15){
    juros = 10;
    valorTotal = valor + (valor * juros / 100);
}
else{
    juros = 5;
    valorTotal = valor + (valor * juros / 100);
}

// Saida
console.log("Valor original da divida: R$ " + valor);
console.log("Dias de atraso: " + dias);
console.log("Taxa de juros: " + juros + "%");
console.log("Valor total com juros: R$ " + valorTotal);
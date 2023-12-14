// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// Entrada
let valorJantar = Number(prompt("Valor do jantar R$ "));
// Processamento
let valorGarcom = valorJantar * 0.1;
let valorTotal = valorJantar + valorGarcom;
// Saída
alert(`Valor do jantar: R$ ${valorJantar.toFixed(2)}
Taxa de serviço: R$ ${valorGarcom.toFixed(2)}
Valor total: R$ ${valorTotal.toFixed(2)}`);

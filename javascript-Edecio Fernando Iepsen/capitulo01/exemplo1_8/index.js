// Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e informe a duração total da viagem em número de horas.
// Entrada
let dias = Number(prompt("Dias: "));
let horas = Number(prompt("Horas: "));
// Processamento
let total = (24 * dias) + horas;
// Saída
alert(`Duração da viagem em horas: ${total} horas`);
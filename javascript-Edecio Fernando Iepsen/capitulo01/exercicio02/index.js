// Entrada
let valorTotal = Number(prompt("Valor Total R$ "));
let totalPessoas = Number(prompt("Nº de Clientes: "));
// Processamento
let valorIndividual = valorTotal / totalPessoas;
// Saída
alert(`Valor Total: R$ ${valorTotal.toFixed(2)}
Nº de Clientes: ${totalPessoas}
Valor Individual: R$ ${valorIndividual.toFixed(2)}`);

// Entrada
let preco = Number(prompt("Preço R$: "));
// Processamento
let precoVista = preco - (0.1 * preco);
let precoPrazo = preco / 3;
// Saída
alert(`Preço R$: ${preco.toFixed(2)}
À vista R$: ${precoVista.toFixed(2)}
Ou 3x de R$: ${precoPrazo.toFixed(2)}`);

function calcularValor() {
  // Entrada
  let valorInicial = Number(document.getElementById("valorInicial").value);
  let tempoUso = Number(document.getElementById("tempoUso").value);

  // Processamento
  let valorFinal = 0;
  if (tempoUso % 15 == 0) {
    valorFinal = ((tempoUso / 15) * valorInicial).toFixed(2);
  } else {
    valorFinal = ((Math.trunc(tempoUso / 15) + 1) * valorInicial).toFixed(2);
  }

  // Saida
  let saida = document.getElementById("saida");
  saida.innerHTML = `<b>Valor a Pagar R$: ${valorFinal}</b>`;
}

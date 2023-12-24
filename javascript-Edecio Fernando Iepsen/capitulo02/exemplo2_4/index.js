function calcularPreco() {
  let preco = Number(document.getElementById("preco").value);
  let consumo = Number(document.getElementById("consumo").value);

  let valorPagar = ((preco * consumo) / 1000).toFixed(2);

  let saida = document.getElementById("saida");
  saida.innerHTML = `<b>Valor a pagar R$: ${valorPagar}</b>`;
}

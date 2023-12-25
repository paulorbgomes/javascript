function mostrarPromocao() {
    // Entrada
    let medicamento = document.getElementById("medicamento").value;
    let preco = Number(document.getElementById("preco").value);

    // Processamento

    let valorFinal = Math.trunc(2 * preco);

    // Saida
    let saida01 = document.getElementById("saida01");
    let saida02 = document.getElementById("saida02");

    saida01.innerHTML = `<b>Promoção de ${medicamento}</b>`
    saida02.innerHTML = `<b>Leve 2 por apenas R$: ${valorFinal.toFixed(2)}</b>`;
}
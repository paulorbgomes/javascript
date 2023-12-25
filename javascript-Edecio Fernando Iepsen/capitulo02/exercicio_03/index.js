function verPromocao() {
  //Entrada
  let produto = document.getElementById("produto").value;
  let preco = Number(document.getElementById("preco").value);

  //Processamento
  let preco03 = Number((preco / 2).toFixed(2));
  let precoPromocao = 2 * preco + preco03;

  //Saida
  let saida01 = document.getElementById("saida01");
  let saida02 = document.getElementById("saida02");

  saida01.innerHTML = `<b>${produto} - Promoção: Leve 3 por R$: ${precoPromocao.toFixed(
    2
  )}</b>`;
  saida02.innerHTML = `<b>O 3º produto custa apenas R$: ${preco03.toFixed(
    2
  )}</b>`;
}

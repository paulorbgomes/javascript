function verPromocao() {
  let modelo = document.getElementById("modelo").value;
  let preco = Number(document.getElementById("preco").value);

  let saida01 = document.getElementById("saida01");
  let saida02 = document.getElementById("saida02");
  let saida03 = document.getElementById("saida03");

  let entrada = (preco / 2).toFixed(2);
  let parcelas = ((preco - entrada) / 12).toFixed(2);

  saida01.innerHTML = `<b>Promoção: ${modelo}</b>`;
  saida02.innerHTML = `<b>Entrada de R$: ${entrada}</b>`;
  saida03.innerHTML = `<b>+12x de R$ ${parcelas}</b>`;
}

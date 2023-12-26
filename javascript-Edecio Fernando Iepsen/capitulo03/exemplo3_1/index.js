function calcularAjuste() {
  //Entrada
  let salario = Number(document.getElementById("salario").value);
  let tempo = Number(document.getElementById("tempo").value);

  //Processamento
  let numQuadrienios = Math.floor(Number(tempo / 4));
  let novoSalario = salario;
  if (numQuadrienios >= 1) {
    for (let i = 1; i <= numQuadrienios; i++) {
      novoSalario = novoSalario + 0.01 * novoSalario;
    }
  }

  //Saida
  let saida01 = document.getElementById("saida01");
  let saida02 = document.getElementById("saida02");
  let saida03 = document.getElementById("saida03");
  let saida04 = document.getElementById("saida04");

  saida01.innerHTML = `Salário R$: ${salario.toFixed(2)}`;
  saida02.innerText = `Tempo (anos): ${tempo}`;
  saida03.innerHTML = `Quadrênios: ${numQuadrienios}`;
  saida04.innerHTML = `Salário Final R$: ${novoSalario.toFixed(2)}`;

  console.log(numQuadrienios);
}

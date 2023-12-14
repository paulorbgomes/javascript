function calcularIMC() {
  let peso = Number(document.getElementById("peso").value);
  let altura = Number(document.getElementById("altura").value);
  let mensagem = document.getElementById("mensagem");
  let aviso = document.getElementById("aviso");

  let imc = peso / (altura * altura);

  mensagem.innerHTML = `Seu resultado: ${imc.toFixed(2)}`;

  if (imc < 16.9) {
    aviso.innerHTML = "Situação: muito abaixo do peso!";
  } else if (imc >= 17 && imc <= 18.4) {
    aviso.innerHTML = "Situação: abaixo do peso!";
  } else if (imc >= 18.5 && imc <= 24.9) {
    aviso.innerHTML = "Situação: peso normal!";
  } else if (imc >= 25 && imc <= 29.9) {
    aviso.innerHTML = "Situação: acima do peso";
  } else if (imc >= 30 && imc <= 34.9) {
    aviso.innerHTML = "Situação: obesidade grau I";
  } else if (imc >= 35 && imc <= 40) {
    aviso.innerHTML = "Situação: obesidade grau II";
  } else if (imc > 40) {
    aviso.innerHTML = "Situação: obesidade grau III";
  }
}

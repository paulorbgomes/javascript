function verificar() {
  var data = new Date();
  var anoAtual = data.getFullYear();
  var ano = window.document.getElementById("ano");
  var sexo = window.document.getElementById("sex");
  var d4 = window.document.getElementById("d4");
  var idade = Number(anoAtual) - Number(ano.value);
  var d5 = window.document.getElementById("d5");

  if (idade < 0) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
    //d4.innerHTML = `<strong>Dados Inválidos!</strong>`;
  } else if (
    String(sexo.value) == "Masculino" ||
    String(sexo.value) == "masculino" ||
    String(sexo.value) == "M" ||
    String(sexo.value) == "m"
  ) {
    d4.innerHTML = `<strong>Detectamos Homem com ${idade} anos.</strong>`;
    //var img = document.createElement("img");
    //img.setAttribute("id", "foto");
    //img.setAttribute("src", "homem.png");
    //d5.appendChild(img);
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("src", "homem.png");
    d5.appendChild(img);
  } else if (
    String(sexo.value) == "Feminino" ||
    String(sexo.value) == "feminino" ||
    String(sexo.value) == "F" ||
    String(sexo.value) == "f"
  ) {
    d4.innerHTML = `<strong>Detectamos Mulher com ${idade} anos.</strong>`;
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.setAttribute("src", "mulher.png");
    d5.appendChild(img);
  }
}

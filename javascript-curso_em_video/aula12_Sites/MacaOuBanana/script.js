function clicar() {
  var fruta = window.document.getElementById("fruta");
  var d1 = window.document.getElementById("d1");
  if (
    String(fruta.value) == "maçã" ||
    String(fruta.value) == "Maçã" ||
    String(fruta.value) == "Maça" ||
    String(fruta.value) == "maça"
  ) {
    d1.innerHTML = `Você escolher <strong>MAÇÃ</strong>!`;
    var img = window.document.createElement("img");
    img.setAttribute("id", "fig1");
    img.setAttribute("src", "maca.png");
    d1.appendChild(img);
  } else if (
    String(fruta.value) == "Banana" ||
    String(fruta.value) == "banana"
  ) {
    d1.innerHTML = `Você escolheu <strong>BANANA</strong>!`;
    var img = window.document.createElement("img");
    img.setAttribute("id", "fig2");
    img.setAttribute("src", "banana.png");
    d1.appendChild(img);
  } else {
    window.alert("Opção Inválida! Tente Novamente.");
  }
}

function carregar() {
  var cab1 = window.document.getElementById("cab1");
  cab1.innerHTML = `<strong>Hora do Dia</strong>`;
  var div1 = window.document.getElementById("div1");
  var hora = new Date();
  var agora = hora.getHours();
  var p1 = window.document.getElementById("p1");
  div1.innerHTML = `<strong>Agora são ${agora} horas</strong>.`;
  var div2 = window.document.getElementById("div2");
  var im1 = window.document.getElementById("im1");
  if (agora < 12) {
    p1.innerHTML = `<strong>Bom-Dia!</strong>`;
    im1.src = "manha_editada.png";
    document.body.style.background = "#89ca9d";
  } else if (agora <= 18) {
    p1.innerHTML = `<strong>Boa-Tarde!</strong>`;
    im1.src = "tarde_editada.png";
    document.body.style.background = "#ef8861";
  } else {
    p1.innerHTML = `<strong>Boa-Noite!</strong>`;
    im1.src = "noite_editada.png";
    document.body.style.background = "#959595";
  }
}

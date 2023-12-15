function converterTempo() {
  let titulo = document.getElementById("titulo").value;
  let duracao = Number(document.getElementById("duracao").value);
  let tituloFilme = document.getElementById("tituloFilme");
  let tempoConvertido = document.getElementById("tempoConvertido");

  let horas = Math.trunc(duracao / 60);
  let minutos = duracao - horas * 60;

  tituloFilme.innerHTML = `<b>${titulo}</b>`;
  tempoConvertido.innerHTML = `<b>${horas} hora(s) e ${minutos} minutos(s)</b>`;
}

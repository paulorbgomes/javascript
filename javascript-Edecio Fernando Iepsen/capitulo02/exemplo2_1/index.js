function mostrarMensagem() {
  let nome = document.getElementById("nome").value;
  let mensagem = document.getElementById("mensagem");

  mensagem.innerHTML= `Olá, ${nome}!`;
}

function entrar() {
  let nome = prompt("Digite o seu nome: ");
  let mensagem = document.getElementById("area");
  
  if (nome === null || nome === "") {
    alert("A digitação do nome é obrigatório!");
  } else {
    mensagem.innerHTML = `Bem-Vindo! ${nome}.`;
  }
}

function olaJS() {
  console.log("Funcionou o EventListener!");
}

/*
let botao = document.querySelector("button");
botao.addEventListener("click", olaJS);
*/

let botao = document.getElementById("botao");
botao.addEventListener("click", olaJS);

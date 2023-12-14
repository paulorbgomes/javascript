function eventoOnClick() {
  console.log("Testando evento onClick em JS ... FUNCIONOU!");
}

function eventoOnMouseOver() {
  console.log("Testendo evento onMouseOver em JS ... FUNCIONOU!");
}

let botao = document.querySelector("button");
botao.addEventListener("click", eventoOnMouseOver);

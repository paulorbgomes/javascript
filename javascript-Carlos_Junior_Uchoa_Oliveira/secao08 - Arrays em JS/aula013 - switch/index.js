function pedir() {
  let valor = Number(prompt("Número do pedido: "));
  switch (valor) {
    case 1:
      alert("Você escolheu 1 - Coca-Cola");
      break;
    case 2:
      alert("Você escolheu 2 - Suco");
      break;
    case 3:
      alert("Você escolheu 3 - Água Gelada");
      break;
    case 4:
      alert("Você escolheu 4 - Chamar Atendente");
      break;
    default:
      alert("Opção inválida! Repita novamente.");
  }
}

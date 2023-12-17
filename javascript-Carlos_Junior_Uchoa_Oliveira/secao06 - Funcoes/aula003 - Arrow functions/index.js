// Função tradicional
function mensagemTradicional() {
  console.log("Boas Festas!");
}

function somaTradicional(a, b) {
  return a + b;
}

mensagemTradicional();
console.log(somaTradicional(20, 30));

// Arrow Function
const mensagem = () => {
  console.log("Boas Festas!");
};
mensagem();

const soma = (a, b) => {
  return a + b;
};
console.log(soma(100, 400));

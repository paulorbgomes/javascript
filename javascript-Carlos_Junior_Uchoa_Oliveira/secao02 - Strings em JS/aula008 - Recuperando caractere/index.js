const nome = prompt("Digite o seu nome: ");
const posicao = Number(prompt("Digite a posição: "));
alert(`Na posição ${posicao} está a letra: ${nome[posicao]}`);
alert(`Na posição ${posicao} está a letra: ${nome.charAt(posicao)}`);

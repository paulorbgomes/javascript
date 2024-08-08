var cont = 1;
/*while (cont <= 10) {
  console.log(`Passo: ${cont}`);
  cont = cont + 1;
}
*/

/*do {
  console.log(`Passo: ${cont}`);
  cont = cont + 1;
} while (cont <= 10);
*/

while (true) {
  if (cont <= 10) {
    console.log(`Passo: ${cont}`);
    cont = cont + 1;
  } else {
    break;
  }
}

//const prompt = require("prompt-sync")({ sigint: true });
//const nome = prompt("Qual é o seu nome?");

const prompt = require("prompt-sync")({ sigint: true });
//const prompt = prompt();

var distance = prompt("Digite aqui a distância");

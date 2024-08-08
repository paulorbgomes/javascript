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

const prompt = require("prompt-sync")({ sigint: true });
var nome = prompt("Qual é o seu nome? ");

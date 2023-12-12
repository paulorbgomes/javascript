/*
// if-else
const idade = Number(prompt("Digite a sua idade: "));
if (idade < 18) {
  alert("Você é menor de idade!");
} else {
  alert("Você é maior de idade!");
}
*/

/*
// if-else if-else
const idade = Number(prompt("Digite a sua idade: "));
if (idade < 18) {
  alert("Criança! | Adolescente!");
} else if (idade >= 60) {
  alert("Idoso!");
} else {
  alert("Adulto!");
}
*/

// if Ternário
const idade = Number(prompt("Digite a sua idade: "));
(idade >= 18) ? console.log("Maior de idade!") : console.log("Menor de idade!");

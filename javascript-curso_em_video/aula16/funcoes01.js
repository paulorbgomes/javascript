function parOuimparR(num) {
  if (num % 2 == 0) {
    console.log(`O número ${num} é PAR!`);
  } else {
    console.log(`O número ${num} é ÍMPAR!`);
  }
} // Isso é uma ROTINA pois não tem retorno!

function parOuimparF(num) {
  if (num % 2 == 0) {
    return "PAR";
  } else {
    return "ÍMPAR";
  }
} // Isso é uma FUNÇÃO pois tem retorno!

parOuimparR(5);

let x = 222;
console.log(`O número ${x} é ` + parOuimparF(x) + "!");

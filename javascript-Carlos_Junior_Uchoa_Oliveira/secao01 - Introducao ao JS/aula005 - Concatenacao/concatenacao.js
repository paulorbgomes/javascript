let nome = "Paulo";
let sobrenome = "Gomes";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
console.log(typeof nomeCompleto);

let concatenacao = 1 + "1";
console.log(concatenacao);
console.log(typeof concatenacao);
console.log(typeof Number(concatenacao)); // cast

// f-string ou interpolação
let idade = 34;
console.log(`Nome: ${nomeCompleto}; Idade: ${idade} anos ...`);

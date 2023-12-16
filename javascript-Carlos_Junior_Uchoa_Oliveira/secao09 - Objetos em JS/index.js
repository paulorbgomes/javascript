console.log("Objeto em JS ...");
let objeto = {
  nome: "Paulo R. B. Gomes",
  carreira: "ADS",
  ano: "2023",
  mostrarNome: function () {
    console.log(nome);
  },
  mostrarCarreira: function () {
    console.log(carreira);
  },
  mostrarAno: function () {
    console.log(ano);
  },
};
console.log(objeto);
//console.log(objeto.nome);
//console.log(objeto.carreira);
//console.log(objeto.ano);
console.log(objeto.mostrarNome);
console.log(objeto.mostrarCarreira);
console.log(objeto.mostrarAno);

console.log("Array de Objetos em JS ...");
let arrayObj = [
  { nome: "Paulo R. B. Gomes", carreira: "ADS", ano: "2024" },
  { nome: "Paulo R. B. Gomes", carreira: "Engenharia", ano: "2014" },
  { nome: "Paulo R. B. Gomes", carreira: "Física", ano: "2011" },
];
console.log(arrayObj);
console.log(arrayObj[0].nome);
console.log(arrayObj[0].carreira);
console.log(arrayObj[0].ano);

let pessoa = new Object();
pessoa.nome = "Gomes";
console.log(pessoa);
console.log(pessoa.nome);

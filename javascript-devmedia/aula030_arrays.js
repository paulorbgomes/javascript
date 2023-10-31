const diasSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terca-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira"
];

function mostraDia(dia){
    console.log(dia);
}

console.log(diasSemana);
diasSemana.push("Sabado");
console.log(diasSemana);
//console.log(diasSemana);
//diasSemana.splice(6,1);
//console.log(diasSemana);
//diasSemana.pop();
//diasSemana.shift();
//console.log(diasSemana);

diasSemana.forEach(mostraDia);


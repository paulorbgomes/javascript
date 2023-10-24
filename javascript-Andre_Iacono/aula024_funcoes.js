function filme(){
    console.log("The Matrix");
}
filme();

/*
function soma(a, b){
    return a + b;
}
console.log(soma(10, 20));
*/

function soma(){
    let soma = 0;
    for(let valor of arguments){
        soma = soma + valor;
    }
    return soma;
}
console.log(soma(10, 20, 30, 100));


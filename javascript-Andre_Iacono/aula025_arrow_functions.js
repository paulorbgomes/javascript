/*
// IMPLEMENTACAO TRADICIONAL
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2) / 2;
    return media;
}

let mediaFinal = calcularMedia(10, 8);
console.log(`Média: ${mediaFinal.toFixed(2)}`);
*/

// IMPLEMENTACAO USANDO ARROW FUNCTION
/*
const calcularMedia = (nota1, nota2) => {
    return (nota1 + nota2) / 2;
}
*/

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;

let mediaFinal = calcularMedia(10, 6);
console.log(`Média: ${mediaFinal.toFixed(2)}`);
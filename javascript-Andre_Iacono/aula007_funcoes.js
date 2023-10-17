// FUNÇÕES COM CÁLCULOS
function desconto(valor, porcentagem) {
    return valor - (valor * porcentagem/100);
}

var valor = 100;
var porcentagem = 10;
console.log("Uma compra de R$ " + valor + " com " + porcentagem + "% de desconto vale R$ " + desconto(valor, porcentagem));
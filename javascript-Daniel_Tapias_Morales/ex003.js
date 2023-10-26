// Fazer jogador 1 digitar um numero
let num1 = Number(prompt("Jogador-1, digite um numero: "));

// Fazer o jogador 2 digitar outro numero
let num2 = Number(prompt("Jogador-2, digite um numero: "));

// Se forem iguais, mostrar a mensagem empate
if(num1 === num2){
    alert("EMPATE!");
}

// Sortear um numero entre 0 e 1
let sorteio = Math.random();

// Se o numero sorteado for 0, ganha em escolheu o numero MENOR
if(sorteio == 0){
    if(num1 < num2){
        alert("O jogador-1 VENCEU!");
    }
    else{
        alert("O jogador-2 VENCEU!"):
    }
}
else if(sorteio == 1){
    if(num1 > num2){
        alert("O jogador-1 VENCEU!");
    }
    else{
        alert("O jogador-2 VENCEU!");
    }
}
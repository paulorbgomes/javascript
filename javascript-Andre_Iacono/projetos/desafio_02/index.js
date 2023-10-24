let valor = Number(prompt("Digite o valor do produto [em US$]:"));
console.log(typeof(valor));
if(valor >= 20){
    document.getElementById("resultado").innerHTML = "Aprovado!";
}
else{
    document.getElementById("resultado").innerHTML = "Reprovado!";
}
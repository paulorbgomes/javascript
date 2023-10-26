let entrada = parseInt(prompt("Digite um valor entre 0 e 10:"));
if(entrada < 0 || entrada > 10){
    alert("Valor invalido!");
}
else{
    for(var i = 0; i <= 1000; i++){
        document.write(entrada + " x " + i + " = " + entrada*i + "<br>");
        if(i != 0 && i % 10 == 0){
            document.write("<hr>" + "<br>");
        }
    }
}
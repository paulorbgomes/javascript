function criaLivro(titulo, autor, paginas){
    const livro = {
        titulo: titulo,
        autor: autor,
        paginas: paginas,

        imprimir: function(){
        console.log("Imprimindo ...");
        }   
    }
    return livro;
}

let livro1 = criaLivro("Atomic Habits", "James Clear", 306);
let livro2 = criaLivro("Tensor Models", "Paulo", 136);

console.log(livro1);
console.log(livro2);
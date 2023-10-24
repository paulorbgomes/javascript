function CriaLivro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}

let livro1 = new CriaLivro("Atomic Habits", "James Clear", 306);
console.log(livro1);
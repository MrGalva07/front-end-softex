interface Livro {
    titulo: string;
    autor: string;
    ano: number;
}

function filtrarLivrosPorAutor(livros: Livro[], autor: string): Livro[] {
    return livros.filter(livro => livro.autor === autor);
}


const livros: Livro[] = [
    { titulo: "Livro A", autor: "Autor 1", ano: 2001 },
    { titulo: "Livro B", autor: "Autor 2", ano: 2005 },
    { titulo: "Livro C", autor: "Autor 1", ano: 2010 },
    { titulo: "Livro D", autor: "Autor 3", ano: 2015 }
];

const livrosDoAutor1 = filtrarLivrosPorAutor(livros, "Autor 1");
console.log(livrosDoAutor1);  

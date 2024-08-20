function encontrarPalavraMaisLonga(frase: string): string {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    }

    return palavraMaisLonga;
}

const frase = 'Tutorial de desenvolvimento da web';
const palavraMaisLonga = encontrarPalavraMaisLonga(frase);
console.log(palavraMaisLonga);  

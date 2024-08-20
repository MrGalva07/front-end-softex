function inverterString(s: string): string {
    return s.split('').reverse().join('');
}


const entrada = "hello";
const resultado = inverterString(entrada);
console.log(resultado);  

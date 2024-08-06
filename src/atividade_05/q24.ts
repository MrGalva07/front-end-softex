/*Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra
"Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
utilize a palavra "FizzBuzz". */
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
        output += "Fizz";
    }
    if (i % 5 === 0) {
        output += "Buzz";
    }
    console.log(output || i);
}

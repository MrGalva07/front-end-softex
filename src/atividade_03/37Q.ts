// 37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.

const base2 = Number(prompt("Digite a base do triângulo: "));
const altura2 = Number(prompt("Digite a altura do triangulo: "));

// Para triangulo retângulo
const hipotenusa2 = Math.sqrt(Math.pow(base2, 2) + Math.pow(altura2, 2));
const perimetro2 = base2 + altura2 + hipotenusa2;
console.log('Triângulo retângulo: ', perimetro2);


// Para triângula isósceles
const ladosIguais = Math.sqrt(Math.pow(base2/2, 2) + Math.pow(altura2, 2));
const perimetro2__= 2 * ladosIguais + base2;
console.log('Triângulo isósceles: ', perimetro2__);
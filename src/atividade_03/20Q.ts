//Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
const nomeQ20 = String(prompt('Digite seu nome'));
if (nomeQ20.length > 5) {
    alert('Nome válido!');
}
// 33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.
const email = prompt('Cadastre o seu email: ');
const saudacao: string = 'Boas vindas!';

const emailConcatenado = `email ${email} cadastradado com sucesso!`;
console.log(emailConcatenado);

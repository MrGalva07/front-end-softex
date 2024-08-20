function advinheNumero(): void {
    const numeroCorreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const tentativa = parseInt(prompt("Adivinhe o número entre 1 e 100:") || "0", 10);
        tentativas++;

        if (tentativa === numeroCorreto) {
            alert(`Parabéns! Você acertou o número ${numeroCorreto} em ${tentativas} tentativas.`);
            acertou = true;
        } else if (tentativa < numeroCorreto) {
            alert("O número correto é maior.");
        } else {
            alert("O número correto é menor.");
        }
    }
}


advinheNumero();

let tentativas = 5;
let entrada = parseInt(prompt("Tente adivinhar um número entre 0 e 10, você terá 5 tentativas:"));

while (tentativas > 0 && entrada !== 8) {
    tentativas--;
    if (tentativas === 0) {
        alert("Você excedeu o número máximo de tentativas.");
        break;
    }
    entrada = parseInt(prompt(`Tente adivinhar um número entre 0 e 10 (tentativas restantes: ${tentativas}):`));
}

if (entrada === 8) {
    alert("Parabéns! Você acertou o número.");
}
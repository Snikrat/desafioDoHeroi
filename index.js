//  Importando um modulo de leitura de teclado (readLine)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Criando a interface de leitura

// Perguntando e exibindo o nome do herói
rl.question('Digite o nome do herói: ', (nameHero) => {
    console.log(`Bem-vindo ${nameHero}`);
    rl.close();
    

// Criando o sistema de elo

// Definiando uma xp aleatoria para deixar o elo mais dinamico
const xp = gerarXpAleatorio();

// Criando a logica dos elos
let elo
if (xp < 1000) {
    elo = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    elo = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    elo = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    elo = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    elo = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    elo = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    elo = "Imortal";
} else {
    elo = "Radiante";
}

// Exibindo o status do herói
console.log(`O herói ${nameHero} está no nível ${elo}.`)

});


// Criando a função para gerar o xp aleatorio
function gerarXpAleatorio() {
   return Math.floor(Math.random() * 10001);
}


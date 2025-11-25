const prompt = require('prompt-sync')({ sigint: true });
const mensagens = [
    { id: 1, frase: "Hoje o dia está lindo" },
    { id: 2, frase: "Não gostei desse trabalho" },
    { id: 3, frase: "A Aula foi muito divertida" },
    { id: 4, frase: "Que tarefa chata" },
];
const resultado = mensagens.filter(f => f.frase.includes("chata"));
const resultado2 = mensagens.filter(f => f.frase.includes("Não gostei"));
console.table(resultado)
console.table(resultado2)

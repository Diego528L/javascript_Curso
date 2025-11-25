const prompt = require('prompt-sync')({ sigint: true });
const alunos = [
    { nome: "Ana", nota: 8},
    { nome: "Pedro", nota: 5 },
    { nome: "Carla", nota: 9 },
    { nome: "Lucas", nota: 4 },
    
];
const resultado = alunos.filter(a => a.nota > 6);
console.table(resultado)



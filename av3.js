const prompt = require('prompt-sync')({ sigint: true });
const usuarios = [
    { nome: "João",estado:"SP" },
    { nome: "Marina",estado: "MG" },
    { nome: "Cauã",estado:"MG" },
    { nome: "Ana",estado:"RJ" },
];
const resultado = usuarios.filter(u => u.estado.includes("MG"));
console.table(resultado)
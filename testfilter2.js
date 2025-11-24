const prompt = require('prompt-sync')({ sigint: true });
const amigos = [
    { nome: "Ana", cidade: "Luminarias" },
    { nome: "Dani", cidade: "Tocantins" },
    { nome: "Lavinia", cidade: "Lavras" },
    { nome: "Christofer", cidade: "Ingai" },
    { nome: "Jones",cidade:"Maceio"},
];
const resultado = amigos.filter(a => a.cidade === "Luminarias");
console.table(resultado)
const letra = "a"
const result = amigos.filter(n => n.nome.includes("a"))
console.table(result);

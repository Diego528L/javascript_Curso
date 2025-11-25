const prompt = require('prompt-sync')({ sigint: true });
const produtos = [
    { id: 1, nome: "Fone Bluetooth" },
    { id: 2, nome: "Mouse gamer" },
    { id: 3, nome: "Fone com fio" },
    { id: 4, nome: "Teclado Mecânico" },
];
const resultado = produtos.filter(p => p.produto.includes("Fone"));
console.table(resultado)


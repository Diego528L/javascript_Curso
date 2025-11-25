const prompt = require('prompt-sync')({ sigint: true });
const carros = [
    { modelo: "Onix", marca: "Chevrolet" },
    { modelo: "Argo", marca: "Fiat" },
    { modelo: "Mobi", marca: "Fiat" },
    { modelo: "HB20", marca:"Hyundai" },
];
const resultado = carros.filter(f => f.marca.includes("Fiat"));
console.table(resultado)


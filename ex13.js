const prompt = require('prompt-sync')({ sigint: true });
let pontos1,pontos2,pontos3,soma


pontos1=Number(prompt(`Digite nota 1: `))
pontos2 = Number(prompt(`Digite nota 2: `))
pontos3 = Number(prompt(`Digite nota 3: `))
soma = pontos1+pontos2+pontos3
console.log(soma)
if(soma > 1500){
    console.log("Você tem pontos suficientes para se estudar na UFLA:")}

if(soma <= 1500){console.log("Você tem pontos para estudar na Unilavras")}
if(soma < 1000){
    console.log("Estude mais;volte ano que vem!")
}

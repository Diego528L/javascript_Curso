//Meu doc inicial
const prompt = require('prompt-sync')({ sigint: true });
let numeros = [], i
for (i = 0; i <= 10; i++) {
    let n = Number(prompt("Digite um numero", i))
    numeros[i] = n

}
console.log(numeros)
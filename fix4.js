const prompt = require('prompt-sync')({ sigint: true });
let numeros = [5,15,8,25,3,18];
let contador = 0

numeros.forEach((numero,index) => {
    if(numero >10){
        contador = contador++;}
});
console.log(contador)
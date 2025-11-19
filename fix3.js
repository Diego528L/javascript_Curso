const prompt = require('prompt-sync')({ sigint: true });
let valores = [10,20,30,40,];
let dobrados = valores.map((valores)=> {
    return valores * 2;
});
 console.log(dobrados);
 console.log(valores)
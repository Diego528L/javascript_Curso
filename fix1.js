const prompt = require('prompt-sync')({ sigint: true });
let lista = []
lista.push("arroz","feijão","oleo","macarrão","batata","molho","alho","chocolate","tomate","café")

lista.forEach((lista,index) =>{
    console.log(`${index + 1}. ${lista} `);
});
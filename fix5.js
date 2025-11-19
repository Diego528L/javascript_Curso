const prompt = require('prompt-sync')({ sigint: true });
let pedidos = []
pedidos.push("Pizza","Hamburguer","Refrigerante","Bolo");
console.log(pedidos);

pedidos.pop();
pedidos.pop();
console.log(pedidos);

pedidos.forEach((pedido,index))


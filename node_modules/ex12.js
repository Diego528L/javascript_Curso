const prompt = require('prompt-sync')({ sigint: true });
let emails = [], i
for (i = 0; i < 5; i++) {
    let n = Number(prompt("Digite um email: ", i))
    emails[i] = n

}
console.log(emails)
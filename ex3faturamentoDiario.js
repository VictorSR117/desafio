let invoicing = require("./dados.json");
let smaller = invoicing[0].valor;
let daySmaller = 0;
let bigger = invoicing[0].valor;
let daybigger = 0;
let sum = 0;
let count = 0;

invoicing.forEach(element => {
    if (element.dia != 4 && element.dia != 5 && element.dia != 7 && element.dia != 11 && element.dia != 12 && element.dia != 18 && element.dia != 19 && element.dia != 25 && element.dia != 26) {
        if (element.valor < smaller) {
            smaller = element.valor;
            daySmaller = element.dia;
        }
    }
});

invoicing.forEach(element => {
    if (element.dia != 4 && element.dia != 5 && element.dia != 7 && element.dia != 11 && element.dia != 12 && element.dia != 18 && element.dia != 19 && element.dia != 25 && element.dia != 26) {
        if (element.valor > bigger) {
            bigger = element.valor;
            daybigger = element.dia;
        }
    }
});

invoicing.forEach(element => {
    if (element.dia != 4 && element.dia != 5 && element.dia != 7 && element.dia != 11 && element.dia != 12 && element.dia != 18 && element.dia != 19 && element.dia != 25 && element.dia != 26) {
        sum += element.valor;
    }
    if (element.valor > sum / 21) {
        count++;
    }
});

console.log(`o menor faturamento foi no dia ${daySmaller} com o valor de ${smaller}`);
console.log(`o maior faturamento foi no dia ${daybigger} com o valor de ${bigger}`);
console.log(`o número de dias em que o faturamento mensal foi maior que a média mensal é ${count}`);
const states = [
    {acronym: 'SP', value: 67836.43},
    {acronym: 'RJ', value: 36678.66},
    {acronym: 'MG', value: 29229.88},
    {acronym: 'ES', value: 27165.48},
    {acronym: 'Outros', value: 19849.53}
];
let sum = 0;
states.forEach(element => sum += element.value);
console.log(`percentual de representação de cada região:`);
states.forEach(element => {
    let percent = (element.value / sum) * 100;
    console.log(`${element.acronym}: ${percent.toFixed(2)}%`);
});
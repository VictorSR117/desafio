fibonacci = n => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) sequence.push(sequence[i - 1] + sequence[i - 2]);
    return sequence;
}

isFibonacciNumber = num => {
    const sequence = fibonacci(num + 1);
    return sequence.includes(num);
}

// Exemplo de uso
const num = 13;
const sequence = fibonacci(num + 1);
console.log(`A sequência de Fibonacci até o número ${num} é: ${sequence}`);
if (isFibonacciNumber(num)) console.log(`${num} pertence à sequência de Fibonacci`);
else console.log(`${num} não pertence à sequência de Fibonacci`);
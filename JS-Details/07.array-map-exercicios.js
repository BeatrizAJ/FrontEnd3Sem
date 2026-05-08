// Criar um array com 10 numeros.
const numeros = [
    10,
    200,
    99,
    800,
    150,
    32,
    4,
    60,
    300,
    274
];

// rodar o map multiplicando o valor de cada item por 2
const dobro = numeros.map((n) => {
    return n * 2;
});

// exibir o array moificado no final com o console log
console.log(dobro);
const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        perfil : "M",
        quantidade : 10
    },
    {
        descricao : "Camisa Polo",
        cor : "Amarelo",
        perfil : "F",
        quantidade : 15
    },
    {
        descricao : "Camisa Polo",
        cor : "Azul",
        perfil : "F",
        quantidade : 30
    },
    {
        descricao : "Camisa Polo",
        cor : "Roxa",
        perfil : "M",
        quantidade : 5
    }
];

let totCamisetasEmEstoque = estoque.reduce((total, produto) => {
    return total + produto.quantidade;
},0);

console.log(`Total de camisetas em estoque: ${totCamisetasEmEstoque}`);
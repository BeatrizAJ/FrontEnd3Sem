// Ultilizado para filtrar um elemento dentro de um array. Retorna apenas o encontrado

const numeros = [5, 10, 14];

const encontrado = numeros.filter((n) =>{
    return n == 10;
});

// console.log(encontrado);

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

const camisetasFemininas = estoque.filter((camiseta) => {
   return camiseta.perfil == "F";
});

console.log(camisetasFemininas);

console.log("Camisetas Polo Femininas em estoque: ");
console.log();//pula uma linha vazia
//Ultiliza o foreach e exibir os textos conforme o exemplo
//"Amarela: 10 unidades(S)"
//"Roxa: 10 unidades(S)"


camisetasFemininas.forEach((camiseta) => {
    console.log(`${camiseta.cor}: ${camiseta.quantidade} unidade(s)`);
});
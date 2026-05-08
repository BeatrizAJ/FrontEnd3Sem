const hobbies = [
    "Desenhar",
    "Ouvir Musica",
    "Jogar",
    "Conversar"
];

// Array map é um método de classe array que intera sobre o 
// array retornando um novo array, compondo um novo resultado para cada índice antigp, 
// veja:

const novosHobbies = hobbies.map((hobby) => {
    return `<p> ${hobby} </p>;`;
}); 

console.log(novosHobbies);
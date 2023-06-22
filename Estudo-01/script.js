const objs = [
    {
    Nome: "Wesley",  
    Idade: 35,
    Trabalhando: true,
    Detalhes_da_profissão:{
        Empresa:"Unip",
        Função:"Tecnico de Lab. de Eng.",
    },
    Hobbies: ["Video Game", "Programar", "Estudar"],
    },
    {
        Nome: "José",  
        Idade: 25,
        Trabalhando: false,
        Detalhes_da_profissão:{
            Empresa:null,
            Função:null,
        },
        Hobbies: ["Correr", "Andar de bike", "ler"],
        },
]


console.log(objs);

// JSON
// Converter objeto para json

const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// converter JSON para objeto
const objDada = JSON.parse(jsonData);
console.log(objDada);
console.log(typeof objDada);

objDada.map((pessoa)=>{
    console.log(pessoa.Nome);
});
// 🚀 Exercícios - objetos e for/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
  console.log('Bem-vinda,' + info.personagem);

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for(key in info){
    console.log(key);        // console.log(info[key]); 'mostra todos os valores das chaves do objeto'
}


let info2 = {
    personagem: 'Tio Patinhas', 
    origem: 'Christmas on Bear Mountain', 
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

console.log(info.personagem  + ' e '  +  info2.personagem)


// 🚀 Leitura de Objetos
// Usando o objeto abaixo, faça os exercícios a seguir:


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log(' O livro favorito ' + leitor['nome'] + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos.titulo);

  //“O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
// # Como posso adicionar itens na frente e atrás em um Array ? 
// # Veja e pratique com o exemplo a seguir:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// # Se precisarmos adicionar no final,  podemos usar o .push().
tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//console.log(tasksList);

//  Resultado ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// # Se precisarmos adicionar no início, podemos usar o .unshift(). 
//Teste em seu console e veja o resultado.

tasksList.unshift('Estou resolvendo os exercicios trybe');
console.log(tasksList);

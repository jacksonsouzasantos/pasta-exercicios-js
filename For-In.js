// Exercicio pedidos de pizza

//criando ojeto pizza
let pizza = {
    sabor: "maguerita",
    preco: 45.50,
    bordaTomateseco: true,
};

//criando laço for in
 
for (let key in pizza){       //Key  vai ser a chave para acessar todas as características detro do objeto pizza
//console.log(key);

console.log(pizza[key]);       // Outras formas de acesso ao objeto.

}    



//Trabalhando com for/in em arrays


let pizzasDoces = ['chocolate', 'banana', 'nutella'];

for(let key in pizzasDoces){

    console.log(pizzasDoces[key]);   //Adicionando a chave an do objeto conseguimos visualizar a posição do array (key, pizzasDoces[key]);
}


//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' 
//para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

 for(let key in names){
  console.log(' Olá ' + names[key])
 }


//For/of

let food = ['hamburguer', 'bife', 'acarajé']; //////Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores,
for (let position in food) {
    console.log(position);
  };
  //resultado: 0, 1, 2;




//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verrifiicaPalindrome (str){
let reversed = str.split("").reverse().join("")
return str === reversed
}
  console.log(verrifiicaPalindrome("reviver"));
  
  console.log(verrifiicaPalindrome("luz azul"));
  
  console.log(verrifiicaPalindrome("manhã"));


//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function array (inteiros) {
  let maiorIndice = 0;  
  for(let index in inteiros) {
  if(inteiros[maiorIndice] < inteiros[index]){
  maiorIndice = index;
  }
  }
  return maiorIndice;
 }  
 console.log(array([2, 3, 6, 7, 10, 1])); // 4

 // Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

 function array2 (inteiros) {
    let menorIndice = 0;  
    for(let index in inteiros) {
    if(inteiros[menorIndice] > inteiros[index]){
    menorIndice = index;
    }
    }
    return menorIndice;
   }  
   console.log(array2([2, 4, 6, 7, 10, 0, -3])); // 6

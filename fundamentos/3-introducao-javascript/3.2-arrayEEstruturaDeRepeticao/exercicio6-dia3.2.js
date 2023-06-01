//  🚀 Array e loop for

// Considere esse array para realizar os próximos exercícios.

//  Calcule e imprima a média aritmética dos valores contidos no array. 
//  A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;
let media=0;

for (let i=0; i<numbers.length; i+=1){
    resultado=resultado+numbers[i];
    media=(resultado/(numbers.length));
}
console.log(media);
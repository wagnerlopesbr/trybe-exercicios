//  🚀 Array e loop for

// Considere esse array para realizar os próximos exercícios.

//  Some todos os valores contidos no array e imprima o resultado.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado=0;

for (let i=0; i<numbers.length; i+=1){
    resultado=resultado+numbers[i];
}

console.log(resultado);
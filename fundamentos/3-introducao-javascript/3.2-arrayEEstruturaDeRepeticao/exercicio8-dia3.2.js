//  🚀 Array e loop for

// Considere esse array para realizar os próximos exercícios.

//  Utilizando for, descubra o maior valor contido no array e imprima-o.

const numbers = [5, 9, 3, 19, 70, 8, 22, 2, 35, 27];
let maiorNum = numbers[0];

for (let i=0; i<numbers.length; i+=1){
    if (numbers[i]>maiorNum){
        maiorNum=numbers[i];
    }
};
console.log(maiorNum);
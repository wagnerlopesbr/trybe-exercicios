//  🚀 Array e loop for

// Considere esse array para realizar os próximos exercícios.


//  Com base no código que acabou de gerar, referente ao cálculo da média aritmética, 
//  faça com que: caso o valor final seja maior que 20, imprima a mensagem 
//  “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, 
//  imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

const numbers = [5, 9, 3, 19, 70, 8, 22, 2, 35, 27];
let resultado=0;
let media=0;

for (let i=0; i<numbers.length; i+=1){
    resultado=resultado+numbers[i];
}

media=(resultado/(numbers.length));

if (media>20){
    console.log('O valor da média aritmética é maior que 20.');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20.');
}


//  Exercício 3

// Utilize if/else para escrever um código que retorne o maior de três números. 
// Defina, no começo do seu código, três variáveis com os valores que serão comparados.


let num1 = 5;
let num2 = 3;
let num3 = 2;

if (num1 > num2 && num1 > num3) {
    console.log(num1+" é o maior número.");
} else if (num2 > num1 && num2 > num3) {
    console.log(num2+" é o maior número.");
} else if (num3 > num1 && num3 > num2) {
    console.log(num3+" é o maior número.");
} else {
    console.log("Tem número igual aí...");
}

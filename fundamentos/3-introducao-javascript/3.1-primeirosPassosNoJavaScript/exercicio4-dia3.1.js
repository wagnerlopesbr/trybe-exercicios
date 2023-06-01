//  🚀 Exercício 4

// Utilize if...else para escrever um código que defina três variáveis com os valores 
// dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem 
// os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, 
// você deve retornar uma mensagem de erro.

// 👀 Dica: para os ângulos serem de um triângulo válido, 
// a soma dos três ângulos deve ser 180 graus. 
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 65;
let angulo2 = 100;
let angulo3 = 15;

let somaAngulos = angulo1 + angulo2 + angulo3;

let todosAngulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (todosAngulosPositivos) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Ângulo inválido!");
}


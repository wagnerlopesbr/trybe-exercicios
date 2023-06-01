//  Exercício 5

// Utilize switch/case para escrever um código que receba 
// o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber 
// o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais. 
// Uma dica é pesquisar uma função que faça uma string ficar 
// com todas as letras minúsculas (lower case).
// Exemplo: Bispo -> Diagonais.

let nomePeca = "peao";

switch (nomePeca.toLowerCase()) {
    case "rainha":
        console.log("Esta peça anda para qualquer direção e quantas casas quiser.");
        break;
    case "peao":
        console.log("Esta peça anda somente para frente. Caso seja seu primeiro movimento, pode andar 1 ou 2 casas. Nas demais rodadas, somente 1 casa.");
        break;
    case "torre":
        console.log("Esta peça anda para cima, baixo, esquerda e direita e quantas casas quiser.");
        break;
    default:
        console.log("Erro: peça inválida!");
}
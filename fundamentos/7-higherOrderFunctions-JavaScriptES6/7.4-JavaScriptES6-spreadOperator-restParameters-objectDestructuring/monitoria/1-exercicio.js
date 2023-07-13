const pessoas = require('./dados.js');
//Encontre a primeira pessoa que tem uma dívida. 
//Exemplo de retorno: {
//   nome: 'Carol',
//   divida: true,
//   gostaDeProgramarEm:['JS', 'REACT', 'JAVA']
// }
const firstDividaTrue = pessoas.find((pessoa) => pessoa.divida === true);
console.log(firstDividaTrue);
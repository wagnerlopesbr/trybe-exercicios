const pessoas = require('./dados.js');
//Crie uma função que verifica se alguma pessoa tem divida, se tiver, retorne true
const verifyDividaTrue = pessoas.some((pessoa) => pessoa.divida === true);
console.log(verifyDividaTrue);
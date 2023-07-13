const pessoas = require('./dados.js');
// Encontre as pessoas que gostam de programar em JAVA
const lookForJAVALovers = pessoas
    .filter((pessoa) => pessoa.gostaDeProgramarEm.includes('JAVA'));
console.log(lookForJAVALovers);
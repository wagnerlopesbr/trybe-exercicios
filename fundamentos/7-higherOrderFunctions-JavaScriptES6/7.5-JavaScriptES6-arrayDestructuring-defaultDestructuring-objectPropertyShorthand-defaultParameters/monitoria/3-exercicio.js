const pessoas = require('./dados.js');
// Encontre as pessoas que gostam de programar em JAVA
const lookForJAVALovers = pessoas
    .filter((pessoa) => pessoa
        .filter((linguagem) => linguagem.includes('JAVA')));
console.log(lookForJAVALovers);
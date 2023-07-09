const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function compareAnswers(rightAnswer, studentAnswer) {
    if (rightAnswer === studentAnswer) {
      return 1;
    } if (studentAnswer === 'N.A') {
      return 0;
    }
    return -0.5;
  };

function points(rightAnswer, studentAnswer, compareAnswers) {
    let amountOfPoints = 0;
    for (let i = 0; i < rightAnswer.length; i += 1){
        const comparedReturn = compareAnswers(rightAnswer[i], studentAnswer[i]);
        amountOfPoints += comparedReturn;
    }
    return `Resultado final: ${amountOfPoints} pontos`;
}

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
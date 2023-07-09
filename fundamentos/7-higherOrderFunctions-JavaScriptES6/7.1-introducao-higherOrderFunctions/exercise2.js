const checkNumber = (myNumber, number) => myNumber === number;

function lotteryResult(myNumber, checkNumber) {
    const number = Math.floor((Math.random() * 5) + 1);
    return checkNumber(myNumber, number) ? 'GZ! You won!' : ':( You lost!';
}

console.log(lotteryResult(4, checkNumber));
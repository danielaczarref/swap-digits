const swapDigits = (number)=>{
    let swappedNumber = 0
    if (number < 0) return 0;
    let numberString = number.toString();
    let numberArray = numberString.split('');
    let numberArrayLength = numberArray.length;

    for (let i = numberArrayLength % 2 === 0 ? 0 : 1; i < numberArrayLength; i += 2) {
        let temp = numberArray[i];
        numberArray[i] = numberArray[i + 1];
        numberArray[i + 1] = temp;
    }
    swappedNumber = parseInt(numberArray.join(''));
    return swappedNumber;
}

module.exports = swapDigits

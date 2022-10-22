function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sum = sum + element;
        // console.log(i, element, sum);
    }
    return sum;
}

function getOddNum(oddNum) {
    const oddNumbers = [];
    for (let i = 0; i < oddNum.length; i++) {
        const element = oddNum[i];
        if (element % 2 !== 0) {
            console.log(element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const arrayNumber = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNum(arrayNumber);
console.log(oddNumbers);
const oddSum = getSum(oddNumbers);
console.log(oddSum);
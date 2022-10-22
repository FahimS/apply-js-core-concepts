function isEven(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        // console.log('Number is Even');
        return true;
    } else {
        // console.log('Number is Odd');
        return false;
    }
}
const myNumber = isEven(302);
console.log(myNumber);
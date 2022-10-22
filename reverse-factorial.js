function factorial(numbers) {
    let result = 1;
    for (let i = numbers; i >= 1; i--) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}
const fact = factorial(5);
console.log(fact);
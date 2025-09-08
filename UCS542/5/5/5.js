function processArray(numbers) {
    const finalSum = numbers
        .filter(num => num % 2 === 0)
        .map(num => num * 2)
        .reduce((sum, num) => sum + num, 0);

    return finalSum;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = processArray(myArray);

console.log("Original Array:", myArray);
console.log("Final Sum:", result);
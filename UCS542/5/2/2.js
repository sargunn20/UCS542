let numbers = [45, 12, 89, 2, 50];

let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

console.log("Original Array:", numbers);
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

let ascendingOrder = [...numbers].sort((a, b) => a - b);
console.log("Ascending order:", ascendingOrder);

let descendingOrder = [...numbers].sort((a, b) => b - a);
console.log("Descending order:", descendingOrder);
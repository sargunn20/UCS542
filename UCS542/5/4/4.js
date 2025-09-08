let student = {
    name: "Sargun",
    age: 20,
    grade: "A"
};

console.log("--- Initial Object ---");
console.log(student);

student.class = "Computer Science";

console.log("\n--- After Adding Property ---");
console.log(student);

student.grade = "A";

console.log("\n--- After Updating Grade ---");
console.log(student);

console.log("\n--- Final Student Information ---");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
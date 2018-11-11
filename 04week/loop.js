// Use a for loop to console.log each item in the array carsInReverse


// Create an object (an array with keys and values) called persons with the following data:
const persons = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"
};

const keys = Object.key(persons)
// Use a for...in loop to console.log each key.
for (const prop in persons) {
  console.log(`${prop} = ${persons[prop]}`);
};

// Then use a for...in loop and if state to console.log the value associated with the key birthDate
keyBirth = persons.birthDate

for(const prop in keyBirth){
    console.log(`${prop} = ${keyBirth[prop]}`)
}

// Use a for loop to console.log the numbers 1 to 1000 (while loop)
let grade = 0;
while (grade < 60){
  grade += 10;
  console.log("You have a " + grade + " in this class and cannot move on to the next class until your grade is higher than a 70.");
}

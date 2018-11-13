// Use a for loop to console.log each item in the array carsInReverse
const carsInReverse = {
  car1: 'Ford',
  car2: 'Honda',
  car3: 'Lincoln',
  car4: 'Chevy'
  };

  for(let i = 0; i < carsInReverse.length; i++){
    console.log(carsInReverse[i]);
    }


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
  if(keyBirth)
    console.log(`${prop} = ${keyBirth[prop]}`)
}


// Use a for loop to console.log the numbers 1 to 1000 (while loop)
let loopNum = 0;
while (loopNum < 1000){
  loopNum += 1000;
  console.log(loopNum);
}

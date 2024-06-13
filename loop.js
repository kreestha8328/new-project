// Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Example: Print numbers from 1 to 5 using a while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example: Print numbers from 1 to 5 using a do-while loop
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Example: Looping through object properties
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Example: Looping through array elements
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}

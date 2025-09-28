'use srtict'
const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x * x * x;


console.log('average(15, 30): ', average(15, 30));    
console.log('square(4): ', square(4));            
console.log('cube(5): ', cube(5));                

for (let number = 1; number <= 5; number++) {
    console.log(
        `number=${number}, 
        square(number)=${square(number)}, 
        cube(number)=${cube(number)}, 
        average(number)=${average(number, number)}`);
}